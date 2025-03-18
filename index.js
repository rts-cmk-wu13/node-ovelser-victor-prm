/* const basket = require("./basket")
console.log("Hello World")

basket.addItem({name: "apple", price: "4"})
console.log(basket.items) */

const express = require("express")

const app = express();

app.get("/", function(req, res){
    res.send("Hello World from Express")
})

app.listen(3000)