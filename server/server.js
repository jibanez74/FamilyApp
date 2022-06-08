const express = require('express');
const cors = require('cors');

// connect to mongo db
require('./config/mongoConfig')();

// init new express instance
const app = express();

// list of middleware
app.use(cors());
