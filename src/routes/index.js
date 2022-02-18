// eslint-disable-next-line no-unused-vars
const { Application } = require("express")
const userController = require("./../controllers/user")
const blogConroller = require("./../controllers/blog")

/**
 *
 * @param {{app:Application}} param0
 */
module.exports = ({ app }) => {
	app.use("/user", userController)
	app.use("/blog", blogConroller)
	app.get("/", (req, res) => {
		return res.json({ message: "Success" })
	})
}
