const Kategori = require('../models/kategori');

module.exports = {
    getAllKategori: async (req, res) =>{
        const kategori = await Kategori.find().populate("userID","penginapanID" ["_id", "name","nama_penginapan","lokasi_penginapan","harga_penginapan","foto_penginapan"])

        res.json({
            message: "data kategori telah berhasil tampil",
            data:kategori
        })
    },

    createKategori: async (req, res) => {
        let data = req.body
    
        await Kategori.create(data)
    
        res.json({
          message: "berhasil membuat data kategori"
        })
    },

    getkategoriById: async (req, res) =>{
        const {id} = req.params
        const kategori = await Kategori.findById(id)
    
        res.json(kategori)
    }
}