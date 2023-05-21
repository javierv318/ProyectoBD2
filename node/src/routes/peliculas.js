const express = require("express");
const peliculasSchema = require("../../model/peliculas");
const router = express.Router();

//obtener todas las peliculas
router.get("/peliculas", (req, res)=>{
    peliculasSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error) => res.json({message: error}));
}) 

//obtener una pelicula por el título seleccionada
router.get("/peliculas/:title", (req, res) => {
    const { title } = req.params;
    peliculasSchema
      .find({ title: title }) 
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


//obtener una pelicula por su genero
router.get("/peliculas/:genres", (req, res) => {
    const { genres } = req.query;
    peliculasSchema
      .find({ genres: genres }) 
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

module.exports = router;