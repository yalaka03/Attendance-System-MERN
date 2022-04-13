const mongoose = require('mongoose');
DB_NAME="test"
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/' + DB_NAME, {
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectDB