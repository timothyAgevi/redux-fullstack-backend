// eslint-disable-next-line no-unused-vars
const { Application } = require("express")
const express = require("express")
const cors = require("cors")
const logger = require("morgan")
const helmet = require("helmet")
const db = require("./../db")
const { DATABASE_URL } = require("./../config")
const routes = require("../routes")
/**
 *
 * @param {{app:Application}} param0
 */
module.exports = ({ app }) => {
	app.use(express.json({ limit: "100mb" }))
	app.use(express.urlencoded({ extended: true }))
	app.use(logger("combined"))
	app.use(helmet())
	db({ db_url: DATABASE_URL })
	app.use(cors({ origin: "*" }))
	routes({ app })
}
