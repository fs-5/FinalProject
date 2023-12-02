const express = require('express');
const { getTransaksiById, getAllTransaksi, createTransaksi, deleteTransaksiById, editTransaksiById } = require('../controllers/transaksi.controller');
const route = express.Router()
const verifyToken = require('../middleware/auth');

route.get("/", getAllTransaksi);
route.get("/:id", verifyToken, getTransaksiById);
route.post("/:id",verifyToken, createTransaksi);
route.delete("/:id",verifyToken, deleteTransaksiById)
route.patch("/:id", verifyToken, editTransaksiById)

module.exports = route;