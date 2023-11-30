const express = require("express")
const verifyToken = require("../middleware/auth")
const { getAllPenginapan, getPenginapanById, createPenginapan, getUserPenginapan, getAllPenginapanByCategory } = require("../controller/penginapan-controller")
const route = express.Router()

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, './assets/');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname)
    }
});

const upload = multer({storage: storage})

route.get("/" , getAllPenginapan)
route.get("/:kategori" , verifyToken, getAllPenginapanByCategory)
route.get("/:id" , verifyToken, getPenginapanById)
route.post("/" ,verifyToken, upload.single('foto_penginapan'), createPenginapan)

module.exports = route
