const express = require("express")
const router = express.Router()
const {iceCream} = require("../models")
const bodyParser = require("body-parser")

// let jsonParser = bodyParser.json();

router.get("/", async (req, res)=>{
    const listofflavor = await iceCream.findAll()
    res.json(listofflavor)
    console.log(listofflavor)
})

router.get("/about", (req, res)=>{
    res.send("this is the about flavors page")
})

router.post("/", async (req, res)=>{
    const data = req.body
    await iceCream.create(data)
    res.json(data)
    console.log(data)

})

module.exports = router