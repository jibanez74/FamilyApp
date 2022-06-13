const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const postSchema = require('./schemas/postSchema');

// connect to mongo db
require('./config/mongoConfig')();

// init new express instance
const app = express();

// list of middleware
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
  })
);

app.listen(500, () => console.log('app listening on port 5000'));
