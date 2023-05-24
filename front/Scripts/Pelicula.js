export class Peliculas {
    constructor(_id, id, title, type, description, release_year, age_certification, runtime, genres) {
        this._id = _id;
        this.id = id;
        this.title = title;
        this.type = type;
        this.description = description;
        this.release_year = release_year;
        this.age_certification = age_certification;
        this.runtime = runtime;
        this.genres = genres;
    }

    toString() {
        return "Id del objeto: " + this._id +
        "\nId de la base: " + this.id +
        "\nTitulo pelicula: " + this.title +
        "\nTipo: " + this.type +
        "\nDescripcion: " + this.description +
        "\nAño lanzamiento: " + this.release_year +
        "\nCertificado edad: " + this.age_certification +
        "\nDuracion: " + this.runtime +
        "\nGenero: " + this.genres + "\n\n";

    }
}