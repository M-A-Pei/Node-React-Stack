const express = require("express")
const app = express()
const db = require("./models")
const flavor = require("./routes/flavor")

app.use("/flavor", flavor)

db.sequelize.sync().then(() => {
    app.listen("3001", ()=>{console.log("server is listening on port 3001")})
})
