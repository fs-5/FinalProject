const express = require("express")
const verifyToken = require("../middleware/auth")
const { getAllPenginapan, getPenginapanById, createPenginapan, getUserPenginapan } = require("../controller/penginapan-controller")
const route = express.Router()


route.get("/" , getAllPenginapan)
route.get("/:id" , verifyToken, getPenginapanById)
route.get("/:id/penginapan", verifyToken, getUserPenginapan)
route.post("/" , createPenginapan)

module.exports = route