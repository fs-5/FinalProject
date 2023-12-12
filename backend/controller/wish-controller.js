const Penginapan = require('../models/penginapan');
const Wishlist = require('../models/wishlist'); // Pastikan model wishlist sudah diimport
const mongoose = require('mongoose'); // Pastikan mongoose diimport

module.exports = {
  wishlistPenginapan: async (req, res) => {
    const Wishlist = require('../models/wishlist');
  
    try {
      const { penginapanId, userId } = req.body;
  
      if (!penginapanId || !userId) {
        return res.status(400).json({ error: 'PenginapanId dan userId harus disertakan' });
      }
  
      const penginapan = await Penginapan.findById(penginapanId);
  
      if (!penginapan) {
        return res.status(404).json({ error: 'Penginapan tidak ditemukan' });
      }
  
      const newWishlist = new Wishlist({
        penginapan: penginapanId,
        user: userId,
      });
  
      // Simpan objek Wishlist ke dalam database
      await newWishlist.save();
  
      // Update penginapan dengan menambahkan userId ke wishlistBy
      penginapan.wishlistBy.push(userId);
      await penginapan.save();
  
      // Ambil data yang ingin ditampilkan
      const { namaPenginapan, hargaPenginapan } = penginapan;
  
      res.json({
        message: 'Penginapan berhasil ditambahkan ke wishlist',
        namaPenginapan,
        hargaPenginapan,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Terjadi Kesalahan Internal Server' });
    }
  },
  
    
  getWishlistById: async (req, res) => {
    try {
      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Format ID tidak valid' });
      }

      const wishlist = await Wishlist.findById(id);

      if (!wishlist) {
        return res.status(404).json({ error: 'Wishlist tidak ditemukan' });
      }

      res.json({ message: 'Berhasil mendapatkan data wishlist', data: wishlist });
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      res.status(500).json({ error: 'Terjadi kesalahan internal server' });
    }
  }
};

