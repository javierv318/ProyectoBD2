import { Peliculas } from "./Pelicula.js";

function convertirArray(genres) {
    // Remover los corchetes y comillas adicionales
    if (genres != undefined) {
        const arraySinCorchetes = genres.replace(/\[|\]|'|"/g, '');

        // Dividir la cadena por las comas y eliminar los espacios en blanco
        const arrayFinal = arraySinCorchetes.split(',').map(item => item.trim());

        return arrayFinal;
    } else {
        return undefined
    }
}




export async function BDPeliculas() {

    const response = await fetch('http://localhost:9000/api/peliculas');
    const data = await response.json();
    const peliculas = []
    data.forEach(element => {
        const resultado = convertirArray(element.genres);
        peliculas.push(new Peliculas(element._id, element.id, element.title, element.type, element.description, element.release_year, element.age_certification, element.runtime, resultado))
    });

    return peliculas;
}


export async function BuscarNombre(array, titulo) {
    const peliculas = []

    array.forEach(element => {
        if (element.title.toLowerCase() == titulo.toLowerCase()) {
            peliculas.push(element)
        }
    })

    return peliculas;
}


export async function BuscarTipo(array, tipo) {
    const peliculas = []

    array.forEach(element => {
        if (element.type.toLowerCase() == tipo.toLowerCase()) {
            peliculas.push(element)
        }
    })

    return peliculas;
}

export async function BuscarLanzamiento(array, anio) {
    const peliculas = []

    array.forEach(element => {
        if (element.release_year == anio) {
            peliculas.push(element)
        }
    })

    return peliculas;
}

export async function BuscarGenero(peliculas, genero) {
    const peliculasEncontradas = [];

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];

        if (pelicula.genres !== undefined) {
            for (let j = 0; j < pelicula.genres.length; j++) {
                if (pelicula.genres[j].toLowerCase() === genero.toLowerCase()) {
                    peliculasEncontradas.push(pelicula);
                    break;
                }
            }
        }
    }

    return peliculasEncontradas;
}



