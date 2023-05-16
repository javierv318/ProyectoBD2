const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/peliculas")
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);

//routes
app.get("/", (req, res)=> {
    res.send("welcome to my api")
})

//conectar mongo con mi app
mongoose.connect(
    process.env.MONGODB_URI
).then(()=> console.log("Estas conectado a Mongo Alas")).catch((error) => console.error(error));


app.listen(port, ()=> console.log("Server is runnig on port ", port))