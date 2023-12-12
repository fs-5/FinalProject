const Transaksi = require('../models/transaksi');

module.exports = {
    getAllTransaksi: async (req, res) =>{
        const transaksi = await Transaksi.find().populate("pemesananID" ["_id", "name","nama_penginapan","lokasi_penginapan","harga_penginapan","foto_penginapan","Tanggal","Durasi","JumlahTamu","TypeKamar","MetodePembayaran"])

        res.json({
            message: "data transaksi telah berhasil tampil",
            data:transaksi
        })
    },

    createTransaksi: async (req, res) => {
        let data = req.body
    
        await Transaksi.create(data)
    
        res.json({
          message: "berhasil membuat data transaksi"
        })
    },

    getTransaksiById: async (req, res) =>{
        const {id} = req.params
        const transaksi = await Transaksi.findById(id)
    
        res.json(transaksi)
    },

    editTransaksiById: async (req,res) => {
        try {
            const { id } = req.params;
            const updateFields = req.body; // Data yang akan diperbarui
        
            const transaksi = await Transaksi.findByIdAndUpdate(id, updateFields, { new: true });
        
            if (!transaksi) {
              return res.status(404).json({ error: 'Transaksi tidak ditemukan' });
            }
        
            res.json({ message: 'Transaksi berhasil diupdate', data: transaksi });
          } catch (error) {
            console.error('Terjadi kesalahan:', error);
            res.status(500).json({ error: 'Terjadi kesalahan internal server' });
          }
        },
        deleteTransaksiById: async (req, res) => {
            try {
              const { id } = req.params;
              const result = await Transaksi.deleteOne({ _id: id });
          
              if (result.deletedCount === 0) {
                return res.status(404).json({ error: 'Transaksi tidak ditemukan' });
              }
          
              res.json({ message: 'Transaksi berhasil dihapus' });
            } catch (error) {
              console.error('Terjadi kesalahan:', error);
              res.status(500).json({ error: 'Terjadi kesalahan internal server' });
            }
          }
}