const Penginapan = require("../models/penginapan")


module.exports = {
    getAllPenginapan: async (req,res) => {
        const penginapans = await Penginapan.find()

        res.json({
            massage:"berhasil mendapatkan data penginapan",
            data: penginapans
        })
    },
    getPenginapanById: (req,res) => {

    },
    getUserPenginapan: async (req,res) => {
        // const {id} = req.params

        // const penginapans = await Todo.find({penginapanID: id})

        // res.json(penginapans)
    },
    createPenginapan: async (req,res) => {
        let data = req.body
        
        await Penginapan.create(data)

        res.json({
            massage: "Berhasil Menambahkan penginapan"
        })

    }
}