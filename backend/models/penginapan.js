const mongoose = require("mongoose");

const penginapanSchema = new mongoose.Schema({
    nama_penginapan:String,
    lokasi_penginapan:String,
    harga_penginapan:Number,
    deskripsi_penginapan:String,
    foto_penginapan:String,
    userID:{
        type: mongoose.ObjectId,
        ref: 'User'
    }  
})

const Penginapan = mongoose.model('Penginapan', penginapanSchema)

module.exports = Penginapan