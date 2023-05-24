import { BDPeliculas } from "./busquedas.js"
import { BuscarNombre } from "./busquedas.js";
import { BuscarTipo } from "./busquedas.js";
import { BuscarLanzamiento } from "./busquedas.js";
import { BuscarGenero } from "./busquedas.js";

const $peliculas = await BDPeliculas();
export async function buscarPelicula(opcion, cadena) {
  try {
    let respuesta = []
    switch (opcion) {
      case "Titulo":
        respuesta = BuscarNombre($peliculas, cadena.trim());
        break
      case "Tipo":
        respuesta = BuscarTipo($peliculas, cadena.trim().toUpperCase());
        break
      case "Año lanzamiento":
        respuesta = BuscarLanzamiento($peliculas, parseInt(cadena.trim()))
        break
      case "Genero":
        respuesta = BuscarGenero($peliculas, cadena.trim())
        break
    }

    const r = await respuesta
    if(r.length<1){
      respuesta = "Esa pelicula no existe en la base de datos"
    }

    return respuesta



    
  } catch (error) {
    // Manejar errores
    throw error;
  }
}