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
  tanggal: Date,
  jumlahHari: String,
  jumlahTamu: String,
  typeKamar: String,
  metodePembayaran: String
});

const Pemesanan = mongoose.model('Pemesanan', pemesananSchema);

module.exports = Pemesanan;
