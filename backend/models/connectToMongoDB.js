
const mongoose = require('mongoose')

const connectToDB = () => {

    const uri=process.env.MONGO_URI||'mongodb://localhost:27017/czerotwo'

    mongoose.set("strictQuery", false);
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', () => {
        console.log('database connected')
    })
}

module.exports = connectToDB

