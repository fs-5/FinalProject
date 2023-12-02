const express = require('express');
const { getTransaksiById, getAllTransaksi, createTransaksi, deleteTransaksiById, editTransaksiById } = require('../controllers/transaksi.controller');
const route = express.Router()
const verifyToken = require('../middleware/auth');

route.get("/", getAllTransaksi);
route.get("/:id", verifyToken, getTransaksiById);
route.post("/", createTransaksi);
route.delete("/:id", deleteTransaksiById)
route.put("/:id", verifyToken, editTransaksiById)

module.exports = route;