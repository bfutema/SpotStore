const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authConfig = require('../../config/auth');

const User = require('../models/User');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, { expiresIn: 86400 });
};

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    try {
      if (await User.findOne({ email }))
        return res.status(400).send({ error: 'Usuário já existente!' });
      
      const user = await User.create(req.body);

      user.password = undefined;

      return res.send({
        user,
        token: generateToken({ id: user.id }),
      });
    } catch (err) {
      return res.status(400).send({ error: 'Falha ao registrar!' });
    }
  },

  async auth(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
      return res.status(400).send({ error: 'Usuário não encontrado!' });

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send('Usuário/Senha inválidos!');

    user.password = undefined;

    res.send({
      user,
      token: generateToken({ id: user.id }),
    });
  },
};