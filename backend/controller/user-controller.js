const User = require("../models/user")
const mongoose = require('mongoose');
const Penginapan = require("../models/pemesanan")



module.exports = {
    getAllUser: async (req,res) => {
        const users = await User.find()

        res.json({
            massage:"berhasil mendapatkan data user",
            data: users
        })
    },
    getUserById : async (req, res) => {
        try {
          const { id } = req.params;

          if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Format ID tidak valid' });
          }
 
          const user = await User.findById(id);
      
          if (!user) {
            return res.status(404).json({ error: 'User tidak ditemukan' });
          }
  
          res.json({ message: 'Berhasil mendapatkan data user', data: user });
        } catch (error) {

          console.error('Terjadi kesalahan:', error);
          res.status(500).json({ error: 'Terjadi kesalahan internal server' });
        }
      },
      
     
    createUser: async (req,res) => {
        let data = req.body
        
        await User.create(data)

        res.json({
            massage: "Berhasil Menambahkan user"
        })

    },
    editUserById : async (req, res) => {
        try {
          const { id } = req.params;
          const updateFields = req.body; 
      

          if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Format ID tidak valid' });
          }

          const user = await User.findByIdAndUpdate(id, updateFields, { new: true });

          if (!user) {
            return res.status(404).json({ error: 'User tidak ditemukan' });
          }

          res.json({ message: 'User berhasil diupdate', data: user });
        } catch (error) {
          
          console.error('Terjadi kesalahan:', error);
          res.status(500).json({ error: 'Terjadi kesalahan internal server' });
        }
      },

      deleteUser : async (req, res) => {
        try {
            const { id } = req.params;
    
            // Validasi format ID
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({ error: 'Format ID tidak valid' });
            }
    
            // Hapus user berdasarkan ID
            const deletedUser = await User.findByIdAndDelete(id);
    
            // Jika user tidak ditemukan
            if (!deletedUser) {
                return res.status(404).json({ error: 'User tidak ditemukan' });
            }
    
            res.json({ message: 'User berhasil dihapus', data: deletedUser });
        } catch (error) {
            // Tangani kesalahan yang terjadi selama proses
            console.error('Terjadi kesalahan:', error);
            res.status(500).json({ error: 'Terjadi kesalahan internal server' });
        }
    }


}