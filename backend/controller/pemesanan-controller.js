const Pemesanan = require('../models/pemesanan');

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

    getPemesananById: async (req, res) =>{
        const {id} = req.params
        const pemesanan = await Pemesanan.findById(id)
    
        res.json(pemesanan)
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