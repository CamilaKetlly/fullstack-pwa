const express = require('express');
const router = express.Router();
const Partida = require('../models/Partida');

// Create a new match
router.post('/', async (req, res) => {
    const { matchId, mapa, agente, resultado, detalhes } = req.body;
    const newPartida = new Partida({ matchId, mapa, agente, resultado, detalhes });
    await newPartida.save();
    res.json(newPartida);
});

// List all matches
router.get('/', async (req, res) => {
    const partidas = await Partida.find();
    res.json(partidas);
});

// Update a match
router.put('/:id', async (req, res) => {
    const { matchId, mapa, agente, resultado, detalhes } = req.body;
    const updatedPartida = await Partida.findByIdAndUpdate(req.params.id, { matchId, mapa, agente, resultado, detalhes }, { new: true });
    res.json(updatedPartida);
});

// Delete a match
router.delete('/:id', async (req, res) => {
    await Partida.findByIdAndDelete(req.params.id);
    res.json({ message: 'Match deleted successfully!' });
});

module.exports = router;
