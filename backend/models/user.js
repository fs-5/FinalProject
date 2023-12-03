const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String,
    pemesanans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pemesanan'
      }]
})

const User = mongoose.model('User', userSchema)

module.exports = User