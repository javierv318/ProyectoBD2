// Importar lo necesario
import { buscarPelicula } from "./util.js";

// Obtener el botón del HTML y el textarea
const btnIngresar = document.getElementById("ingresar");
let aTSalida = document.getElementById("respuesta");


// Asignar el evento al botón
btnIngresar.addEventListener('click', impri);



async function impri() {
   

  try {
    const data = await buscarPelicula(document.getElementById("opcion").value, document.getElementById("campo-de-texto").value);
    aTSalida.innerHTML = data;
  } catch (error) {
    // Manejar errores
    console.error('Error:', error);
  }
}
