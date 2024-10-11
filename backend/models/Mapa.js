const mongoose = require('mongoose');

const mapaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    callouts: {
        type: String,
        required: true
    },
    estrategias: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Mapa', mapaSchema);