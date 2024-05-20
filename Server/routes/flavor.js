const express = require("express")
const router = express.Router()
const {iceCream} = require("../models")
const bodyParser = require("body-parser")

// let jsonParser = bodyParser.json();

router.get("/", async (req, res)=>{
    const listofflavor = await iceCream.findAll()
    res.json(listofflavor)
})

router.get("/about", (req, res)=>{
    res.send("this is the about flavors page")
})

router.get("/byid/:id", async (req, res) => {
    let id = req.params.id
    let data = await iceCream.findByPk(id)
    res.json(data)
})

router.post("/", async (req, res)=>{
    const data = req.body
    await iceCream.create(data)
    res.json(data)
    console.log(data)

})

router.delete("/:id", async (req, res)=>{
    await iceCream.destroy({
        where:{
            id : req.params.id
        }
    })
    console.log(req.params.id)
    res.send("success")

})

module.exports = router