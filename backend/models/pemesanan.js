const mongoose = require('mongoose');

const pemesananSchema = new mongoose.Schema({
  userID: {
    type: mongoose.ObjectId,
    ref: 'User'
},
  penginapanID: {
    type: mongoose.ObjectId,
    ref: 'Penginapan'
},
  Tanggal: Date,
  Durasi: Date,
  JumlahTamu: String ,
  TypeKamar: String,
  MetodePembayaran: String
})

const Pemesanan = mongoose.model("Pemesanan", pemesananSchema)

module.exports = Pemesanan