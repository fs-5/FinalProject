const express = require("express")
const { getAllUser, getUserById, createUser, getUserPenginapan } = require("../controller/user-controller")
const verifyToken = require("../middleware/auth")
const route = express.Router()


route.get("/" , getAllUser)
route.get("/:id" , verifyToken, getUserById)
route.get("/:id/penginapan", verifyToken, getUserPenginapan)
route.post("/" , createUser)

module.exports = route