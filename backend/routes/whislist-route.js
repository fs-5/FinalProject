const express = require('express')
const { wishlistPenginapan } = require('../controller/whislist-controller')
const verifyToken = require("../middleware/auth")
const route = express.Router()

route.get("/:id" , verifyToken, )
route.post("/:id/whislistPenginapan", verifyToken, wishlistPenginapan)

module.exports = route