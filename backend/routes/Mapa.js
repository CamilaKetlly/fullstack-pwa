const express = require('express');
const router = express.Router();
const Mapa = require('../models/Mapa');

// Create a new map
router.post('/', async (req, res) => {
    const { nome, descricao, callouts, estrategias } = req.body;
    const newMapa = new Mapa({ nome, descricao, callouts, estrategias });
    await newMapa.save();
    res.json(newMapa);
});

// List all maps
router.get('/', async (req, res) => {
    const mapas = await Mapa.find();
    res.json(mapas);
});

// Update a map
router.put('/:id', async (req, res) => {
    const { nome, descricao, callouts, estrategias } = req.body;
    const updatedMapa = await Mapa.findByIdAndUpdate(req.params.id, { nome, descricao, callouts, estrategias }, { new: true });
    res.json(updatedMapa);
});

// Delete a map
router.delete('/:id', async (req, res) => {
    await Mapa.findByIdAndDelete(req.params.id);
    res.json({ message: 'Map deleted successfully!' });
});

module.exports = router;