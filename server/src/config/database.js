const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

async function connect() {
  try {
    await mongoose.connect(`mongodb+srv://nguyenkhacnam06052001:${process.env.MONGO_DB}@cluster0.enctyjg.mongodb.net/?retryWrites=true&w=majority`);
    console.log('connect database success')
  } catch (err) {
    console.log('connect failure')
  }
}

module.exports = { connect }