const { createServer } = require("http")
// eslint-disable-next-line no-unused-vars
const { Application } = require("express")
const { PORT } = require("../config")

/**
 *
 * @param {{app:Application}} param0
 */
module.exports = function ({ app }) {
	const server = createServer(app)
	server.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}`)
	})
}
