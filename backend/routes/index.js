const express = require('express')
const route = express.Router()
const userRouter = require("./user-route")
const authRouter = require("./auth-route")
const penginapanRouter = require("./penginapan-route")
const whislistRouter = require('./wishlist-route')
const transaksiRouter = require('./transaksi-route')
const pemesananRouter = require("./pemesanan-route")

route.get("/" , (req,res) => {
    res.json('ini dari mongoose')
})

route.use("/auth", authRouter)
route.use("/users", userRouter)
route.use("/penginapan", penginapanRouter)
route.use("/transaksi", transaksiRouter)
route.use("/pemesanan", pemesananRouter)
route.use("/wish", whislistRouter)



module.exports = route