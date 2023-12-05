const express = require("express")
const { getAllUser, getUserById, createUser, editUserById, deleteUser } = require("../controller/user-controller")
const verifyToken = require("../middleware/auth")
const route = express.Router()


route.get("/" , getAllUser)
route.get("/:id" , verifyToken, getUserById)
route.patch("/:id" , verifyToken, editUserById)
route.delete("/:id" , verifyToken, deleteUser)

route.post("/" , createUser)

module.exports = route