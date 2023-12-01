const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
    AdminFee: Number,
    Total: Number,
    pemesananID: {
        type: mongoose.ObjectId,
        ref: 'Pemesanan'
    }
})

const Transaksi = mongoose.model("Transaksi", transaksiSchema)

module.exports = Transaksi