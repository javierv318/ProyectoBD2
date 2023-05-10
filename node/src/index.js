const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get("/", (req, res)=> {
    res.send("Welcome to my api")
})

//conectar mongo con mi app
mongoose.connect(
    process.env.MONGODB_URI
).then(()=> console.log("Estas conectado a Mongo Alas")).catch((error) => console.error(error));


app.listen(port, ()=> console.log("Server is runnig on port ", port))