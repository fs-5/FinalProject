const express = require('express');
const { getAllPemesanan, createPemesanan, getPemesananById } = require('../controllers/pemesanan.controller');
const route = express.Router()
const verifyToken = require("../middleware/auth");

route.get("/", getAllPemesanan);
route.get("/:id", verifyToken, getPemesananById);
route.post("/", createPemesanan);

module.exports = route;