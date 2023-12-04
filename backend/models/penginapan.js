const mongoose = require("mongoose");

const penginapanSchema = new mongoose.Schema({
    namaPenginapan: String,
    kodeLokasi: String,
    lokasiPenginapan: String,
    hargaPenginapan: Number,
    deskripsiPenginapan: String,
    fotoPenginapan1: String,
    fotoPenginapan2: String,
    fotoPenginapan3: String,
    fasilitas1: String,
    fasilitas2: String,
    fasilitas3: String,
    fasilitas4: String,
    fasilitas5: String,
    stock: String,
    rating: String,
    userID: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    wishlistBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    kategori: {
        type: String,
        enum: ['hotel', 'villa', 'kostan'], 
        required: true,
    },
    pemesanans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pemesanan'
      }],

});

const Penginapan = mongoose.model('Penginapan', penginapanSchema);

module.exports = Penginapan;
