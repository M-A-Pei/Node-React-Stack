const express = require("express")
const app = express()
const db = require("./models")
const flavor = require("./routes/flavor")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/flavor", flavor)

db.sequelize.sync().then(() => {
    app.listen("3001", ()=>{console.log("server is running in http://localhost:3001")})
})
