const mongoose = require('mongoose');
const colors = require('colors/safe')
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(colors.green(`MongoDB connected: ${conn.connection.host}`));
  } catch (error) {
    console.log(colors.red(`Error: ${error}`));
  }
};

module.exports = connectDB;
