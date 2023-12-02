const express = require('express');
const { getTransaksiById, getAllTransaksi, createTransaksi, deleteTransaksiById } = require('../controllers/transaksi.controller');
const route = express.Router()
const verifyToken = require('../middleware/auth');

route.get("/", getAllTransaksi);
route.get("/:id", verifyToken, getTransaksiById);
route.post("/", createTransaksi);
route.delete("/:id", deleteTransaksiById)
module.exports = route;