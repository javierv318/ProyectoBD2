const mongoose = require("mongoose");

const peliculasSchema = mongoose.Schema({
    _id:{type: Object},
    id:{type: String},
    title:{type: String},
    type:{type: String},
    description:{type: String},
    release_year:{type: Number},
    age_certification:{type: String},
    runtime:{type: Number},
    genres:{String}
});

module.exports = mongoose.model('peliculas', peliculasSchema)