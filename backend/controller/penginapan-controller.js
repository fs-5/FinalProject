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
    getAllPenginapanByCategory: async (req, res) => {
        try {
            const { kategori } = req.params;
            const penginapans = await Penginapan.find({ kategori: kategori });

            res.json({
                message: `Berhasil mendapatkan data penginapan kategori ${kategori}`,
                data: penginapans,
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Terjadi Kesalahan Internal Server',
            });
        }
    },
    createPenginapan: async (req, res) => {
        console.log('Request Body:', req.body); 
        try {
                // Ambil data penginapan dari body permintaan
                const data = req.body;
    
                // Ambil path gambar dari unggahan menggunakan Multer
                const fotoPath = req.file ? req.file.path : '';
    
                console.log('File information:', req.file); // Log ini akan menampilkan informasi file di konsol
    
                // Tambahkan path foto ke data penginapan
                data.foto_penginapan = fotoPath;
    
                // Buat penginapan baru
                await Penginapan.create(data);
    
                res.json({
                    message: 'Berhasil Menambahkan penginapan',
                });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Terjadi Kesalahan Internal Server',
            });
        }
    }
    
}