const mongoose = require('mongoose');

const kategoriSchema = new mongoose.Schema({
  penginapanID: {
    type: mongoose.ObjectId,
    ref: 'Penginapan'
},
  namakategori:String

})

const Kategori = mongoose.model("Kategori", kategoriSchema)

module.exports = Kategori