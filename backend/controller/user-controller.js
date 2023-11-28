const User = require("../models/user")
const Penginapan = require("../models/penginapan")



module.exports = {
    getAllUser: async (req,res) => {
        const users = await User.find()

        res.json({
            massage:"berhasil mendapatkan data user",
            data: users
        })
    },
    getUserById: (req,res) => {

    },
    getUserPenginapan: async (req,res) => {
        const {id} = req.params


        const penginapans = await Penginapan.find({userID: id, })

        res.json(penginapans)
    },
    createUser: async (req,res) => {
        let data = req.body
        
        await User.create(data)

        res.json({
            massage: "Berhasil Menambahkan user"
        })

    }
}