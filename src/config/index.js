/* eslint-disable no-undef */
const dotenv = require("dotenv")

dotenv.config()

const PORT = process.env.PORT
const SECRET_KEY = process.env.SECRET_KEY
const DATABASE_URL = process.env.DATABASE_URL

module.exports = Object.freeze({ PORT, SECRET_KEY, DATABASE_URL })
