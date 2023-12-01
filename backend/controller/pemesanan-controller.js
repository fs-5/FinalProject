const Pemesanan = require('../models/pemesanan');

module.exports = {
    getAllPemesanan: async (req, res) =>{
        const pemesanan = await Pemesanan.find().populate("userID","penginapanID" ["_id", "name","nama_penginapan","lokasi_penginapan","harga_penginapan","foto_penginapan"])

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
    }
}