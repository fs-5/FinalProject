const express = require('express');
const { getTransaksiById, getAllTransaksi, createTransaksi, editTransaksiById, deleteTransaksiById } = require('../controller/transaksi-controller');
const route = express.Router()
const verifyToken = require('../middleware/auth');

route.get("/", getAllTransaksi);
route.get("/:id", verifyToken, getTransaksiById);
route.post("/",verifyToken, createTransaksi);
route.delete("/:id",verifyToken, deleteTransaksiById)
route.patch("/:id", verifyToken, editTransaksiById)

module.exports = route;