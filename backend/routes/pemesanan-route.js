const express = require('express');
const { getAllPemesanan, createPemesanan, getPemesananById, deletePemesananById, editPemesananById, validateObjectId } = require('../controller/pemesanan-controller');
const route = express.Router()
const verifyToken = require("../middleware/auth");

route.get("/",verifyToken,  getAllPemesanan);
route.get("/:id", verifyToken,validateObjectId, getPemesananById);
route.post("/", verifyToken, createPemesanan);
route.delete("/:id", verifyToken ,validateObjectId,deletePemesananById)
route.patch("/:id", verifyToken,validateObjectId, editPemesananById)
module.exports = route;