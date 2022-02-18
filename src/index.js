const server = require("./server")
const app = require("./app")
const settings = require("./settings")

//Setup our server
settings({ app })

// Run our server
server({ app })
