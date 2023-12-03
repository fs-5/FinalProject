const mongoose = require('mongoose');

const pemesananSchema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    ref: 'User'
  },
  penginapanId: {
    type: mongoose.ObjectId,
    ref: 'Penginapan'
  },
  Tanggal: Date,
  Durasi: String,
  JumlahTamu: String,
  TypeKamar: String,
  MetodePembayaran: String
});

const Pemesanan = mongoose.model('Pemesanan', pemesananSchema);

module.exports = Pemesanan;
