const mongoose = require("mongoose");

const penginapanSchema = new mongoose.Schema({
    nama_penginapan: String,
    lokasi_penginapan: String,
    harga_penginapan: Number,
    deskripsi_penginapan: String,
    foto_penginapan: String,
    fasilitas_penginapan: String,
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

});

const Penginapan = mongoose.model('Penginapan', penginapanSchema);

module.exports = Penginapan;
