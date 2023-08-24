const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/my-diary"

const connectToMongo = async () =>
{
    try {
        await mongoose.connect(mongoURI)
        console.log('connection ho gya bhai log');
      } catch (error) {
        console.log('conncection me dikkat hai');
        console.log(error);
      }
}
module.exports = connectToMongo;