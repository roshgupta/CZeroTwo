const mongoose = require('mongoose')

const connectToDB = () => {

    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://localhost:27017/czerotwo', {
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