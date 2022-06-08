const mongoose = require('mongoose');
const { mongoUri } = require('./keys');

module.exports = async () => {
  try {
    const conn = await mongoose.connect(mongoUri);

    console.log(`Mongo db connected - ${conn.connection.host}`);
  } catch (err) {
    console.error(err.message);
  }
};
