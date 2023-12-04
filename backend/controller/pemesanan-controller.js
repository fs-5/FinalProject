const Pemesanan = require('../models/pemesanan');
const mongoose = require('mongoose');


module.exports = {
    getAllPemesanan: async (req, res) =>{
        const pemesanan = await Pemesanan.find().populate({
            path: "penginapanId",
            select: "_id nama nama_penginapan lokasi_penginapan harga_penginapan foto_penginapan",
        });

        res.json({
            message: "data pemesanan telah berhasil tampil",
            data:pemesanan
        })
    },

    createPemesanan: async (req, res) => {
        let data = req.body
    
        await Pemesanan.create(data)
    
        res.json({
          message: "berhasil membuat data pemesanan"
        })
    },

    validateObjectId: (req, res, next) => {
        const { id } = req.params;
        console.log('ID:', id); // Tambahkan log ini
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ error: 'Format ID tidak valid' });
        }
        next();
      },
      

      getPemesananById: async (req, res) => {
        try {
          const { id } = req.params;
          console.log('ID Pemesanan:', id);
          
          const pemesanan = await Pemesanan.find({ userId: id }); // Ganti sesuai dengan kriteria yang sesuai
      
          if (!pemesanan || pemesanan.length === 0) {
            return res.status(404).json({ error: 'Pemesanan tidak ditemukan' });
          }
      
          res.json(pemesanan);
        } catch (error) {
          console.error('Terjadi kesalahan:', error);
          res.status(500).json({ error: 'Terjadi kesalahan internal server', details: error.message });
        }
      },
      

    deletePemesananById: async (req, res) => {
        try {
          const { id } = req.params;
          const result = await Pemesanan.deleteOne({ _id: id });
      
          if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Pemesanan tidak ditemukan' });
          }
      
          res.json({ message: 'Pemesanan berhasil dihapus' });
        } catch (error) {
          console.error('Terjadi kesalahan:', error);
          res.status(500).json({ error: 'Terjadi kesalahan internal server' });
        }
      },

    editPemesananById: async (req,res) => {
        try {
            const { id } = req.params;
            const updateFields = req.body; // Data yang akan diperbarui
        
            const pemesanan = await Pemesanan.findByIdAndUpdate(id, updateFields, { new: true });
        
            if (!pemesanan) {
              return res.status(404).json({ error: 'Pemesanan tidak ditemukan' });
            }
        
            res.json({ message: 'Pemesanan berhasil diupdate', data: pemesanan });
          } catch (error) {
            console.error('Terjadi kesalahan:', error);
            res.status(500).json({ error: 'Terjadi kesalahan internal server' });
          }
        },
}