const Penginapan = require("../models/penginapan")



module.exports = {
    getAllPenginapan: async (req, res) => {
        const penginapans = await Penginapan.find()

        res.json({
            massage: "berhasil mendapatkan data penginapan",
            data: penginapans
        })
    },
    getPenginapanById: async (req, res) => {
            try {
                console.log('Params:', req.params);
        
                const { id } = req.params;
                console.log('Penginapan ID:', id);
        
                const penginapan = await Penginapan.findById(id);
        
                if (!penginapan) {
                    return res.status(404).json({
                        message: 'Penginapan tidak ditemukan',
                    });
                }
        
                res.json({
                    message: 'Berhasil mendapatkan data penginapan berdasarkan ID',
                    data: penginapan,
                });
            } catch (error) {
                console.error(error);
                res.status(500).json({
                    error: 'Terjadi Kesalahan Internal Server',
                });
            }
        },
    getAllPenginapanByCategory: async (req, res) => {
        try {
            const { kategori } = req.params;
            const penginapans = await Penginapan.find({ kategori: kategori });

            if (penginapans.length === 0) {
                return res.status(404).json({
                    message: `Tidak ada penginapan dengan kategori ${kategori}`,
                    data: [],
                });
            }

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