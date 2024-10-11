const mongoose = require('mongoose');

const agenteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    habilidades: {
        type: String,
        required: true
    },
    papel: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Agente', agenteSchema);