const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
    AdminFee: String,
    Total: String,
    pemesananId: {
        type: mongoose.ObjectId,
        ref: 'Pemesanan'
    }
})

const Transaksi = mongoose.model("Transaksi", transaksiSchema)

module.exports = Transaksi