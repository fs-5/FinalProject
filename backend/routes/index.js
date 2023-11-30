const express = require('express')
const route = express.Router()
const userRouter = require("./user-route")
const authRouter = require("./auth-route")
const penginapanRouter = require("./penginapan-route")
const whislistRouter = require('./whislist-route')

route.get("/" , (req,res) => {
    res.json('ini dari mongoose')
})

route.use("/auth", authRouter)
route.use("/users", userRouter)
route.use("/penginapan", penginapanRouter)
route.use("/whis", whislistRouter)


module.exports = route