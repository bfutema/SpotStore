const express = require('express');
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

requireDir('./src/app/models');

app.use('/api', require('./src/routes'));

app.listen(9000);