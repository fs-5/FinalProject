require("dotenv").config()
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
    login: async (req, res) => {
        const userLogin = req.body;

        try {
            const user = await User.findOne({ email: userLogin.email });
            if (!user) {
                throw new Error("Invalid user");
            }

            if (user.password !== userLogin.password) {
                throw new Error("Invalid password");
            }

            const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_KEY);

            res.json({
                message: "Login successful",
                userId: user._id,
                token,
            });
        } catch (error) {
    res.status(400).json({ error: error.message });
}

    }, 
    regis: async (req, res) => {
        try {
            const { nama, username, email, noTelpon, password } = req.body;
      
            // Cek apakah semua field yang dibutuhkan disertakan
            if (!nama || !username || !email || !noTelpon || !password) {
              return res.status(400).json({ error: 'Semua field harus diisi' });
            }
      
            // Cek apakah email atau username sudah digunakan
            const existingUser = await User.findOne({ $or: [{ email }, { username }] });
            if (existingUser) {
              return res.status(400).json({ error: 'Email atau username sudah digunakan' });
            }
      
            // Buat instansi user baru
            const newUser = new User({ nama, username, email, noTelpon, password });
      
            // Simpan user ke database
            await newUser.save();
      
            res.json({ message: 'Registrasi berhasil' });
          } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
          }
    }
    
};
