const express = require("express")
const verifyToken = require("../middleware/auth")
const { getAllPenginapan, getPenginapanById, createPenginapan, getAllPenginapanByCategory } = require("../controller/penginapan-controller")
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
route.get("/kategori/:kategori" , verifyToken, getAllPenginapanByCategory)
route.get("/:id" , verifyToken, getPenginapanById)
route.post("/" ,verifyToken, upload.fields([
    { name: 'fotoPenginapan1', maxCount: 1 },
    { name: 'fotoPenginapan2', maxCount: 1 },
    { name: 'fotoPenginapan3', maxCount: 1 }
]), createPenginapan)

module.exports = route
