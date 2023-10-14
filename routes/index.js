const express = require('express')
const router = express.Router()
const movieRouter = require("./movie")
const userRouter = require("./user")

router.use("/movies", movieRouter)
router.use("/users", userRouter)

module.exports = router;