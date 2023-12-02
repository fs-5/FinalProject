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

    deleteTransaksiById: async (req, res) => {
        const{id} = req.params
        const transaksi = await Transaksi.deleteOne(id)

        res.json(transaksi)
    }

}