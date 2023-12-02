const express = require('express');
const { getAllKategori, getkategoriById, createKategori, deletekategoriById } = require('../controllers/kategori.controller');
const route = express.Router()
const verifyToken = require('../middleware/auth');


route.get("/", getAllKategori);
route.get("/:id", verifyToken, getkategoriById);
route.post("/", createKategori);
route.delete("/:id", verifyToken, deletekategoriById)

module.exports = route