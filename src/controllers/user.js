const router = require("express").Router()
const userService = require("./../services/User.service")

const s = new userService()
router.post("/login", s.login)
router.post("/register", s.register)
router.put("/update/:id", s.updateprofile)

module.exports = router
