const express = require("express");
const peliculasSchema = require("../../model/peliculas");
const router = express.Router();


//obtener todas las peliculas
router.get("/peliculas", (req, res)=>{
    peliculasSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error) => res.json({message: error}));


module.exports = router;