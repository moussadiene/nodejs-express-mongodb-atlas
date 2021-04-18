const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    nom: {
        type: String,
        require: true,
    },
    prenom: {
        type: String,
        require: true,
    },
    date_naiss: {
        type: Date,
        require: true,
    },
    genre: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    telephone: {
        type: String,
        require: false,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Client',clientSchema);