const express = require("express")
const router = express.Router()
const {iceCream} = require("../models")
const bodyParser = require("body-parser")

let jsonParser = bodyParser.json();

router.get("/", async (req, res)=>{
    res.send("this is the flavors page")
    const listofflavor = await iceCream.findAll()
    listofflavor.forEach(e => {
        console.log(e.flavor)
    });
})

router.get("/about", (req, res)=>{
    res.send("this is the about flavors page")
})

router.post("/", jsonParser, async (req, res)=>{
    res.send("you are inserting a new type of ice cream")
    const data = req.body
    await iceCream.create(data)
    console.log(data)

})

module.exports = router