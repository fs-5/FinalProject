const Penginapan = require('../models/penginapan');

module.exports = {
  wishlistPenginapan: async (req, res) => {
    try {
      const { penginapanId, userId } = req.body;

      // Cek apakah penginapanId dan userId valid
      if (!penginapanId || !userId) {
        return res.status(400).json({ error: 'PenginapanId dan userId harus disertakan' });
      }

      // Temukan penginapan berdasarkan penginapanId
      const penginapan = await Penginapan.findById(penginapanId);

      // Jika penginapan tidak ditemukan, kirim respon 404 Not Found
      if (!penginapan) {
        return res.status(404).json({ error: 'Penginapan tidak ditemukan' });
      }
      console.log(penginapan.wishlistBy);
      console.log(penginapan);
      penginapan.wishlistBy.push(userId);
      await penginapan.save();

      res.json({ message: 'Penginapan berhasil ditambahkan ke wishlist' });
    } catch (error) {
      console.error(error); // Tambahkan log error untuk debugging
      res.status(500).json({ error: 'Terjadi Kesalahan Internal Server' });
    }
  },
};
