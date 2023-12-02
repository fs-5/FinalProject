const express = require('express');
const { getAllPemesanan, createPemesanan, getPemesananById, deletePemesananById, editPemesananById } = require('../controllers/pemesanan.controller');
const route = express.Router()
const verifyToken = require("../middleware/auth");

route.get("/", getAllPemesanan);
route.get("/:id", verifyToken, getPemesananById);
route.post("/", createPemesanan);
route.delete("/:id", deletePemesananById)
route.put("/:id", verifyToken, editPemesananById)

module.exports = route;