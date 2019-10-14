const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@omnistack-bamxb.mongodb.net/SpotStore?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;