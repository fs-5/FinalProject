const mongoose = require('mongoose');

const whislistSchema = new mongoose.Schema({
   penginapanId:{
    type: mongoose.isObjectIdOrHexString,
    ref:'penginapan'
   },
   userId:{
    type: mongoose.isObjectIdOrHexString,
    ref: 'User'
   }
})

const Whislist = mongoose.model('Whislist', whislistSchema)

module.exports = Whislist