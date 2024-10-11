const mongoose = require('mongoose');

const partidaSchema = new mongoose.Schema({
    matchId: {
        type: String,
        required: true
    },
    mapa: {
        type: String,
        required: true
    },
    agente: {
        type: String,
        required: true
    },
    resultado: {
        type: String,
        required: true
    },
    detalhes: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Partida', partidaSchema);