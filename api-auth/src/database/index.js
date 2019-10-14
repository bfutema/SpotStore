const mongoose = require('mongoose');

//const _strConn = 'mongodb+srv://omnistack:omnistack@omnistack-bamxb.mongodb.net/SpotStore?retryWrites=true&w=majority'
const _strConn = 'mongodb://localhost:27017/SpotStore';

mongoose.connect(
  _strConn,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;