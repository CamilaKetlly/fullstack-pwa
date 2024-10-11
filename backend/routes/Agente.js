const express = require('express');
const router = express.Router();
const Agente = require('../models/Agente');

// Create a new agent
router.post('/', async (req, res) => {
    const { nome, habilidades, papel, descricao } = req.body;
    const newAgente = new Agente({ nome, habilidades, papel, descricao });
    await newAgente.save();
    res.json(newAgente);
});

// List all agents
router.get('/', async (req, res) => {
    const agentes = await Agente.find();
    res.json(agentes);
});

// Update an agent
router.put('/:id', async (req, res) => {
    const { nome, habilidades, papel, descricao } = req.body;
    const updatedAgente = await Agente.findByIdAndUpdate(req.params.id, { nome, habilidades, papel, descricao }, { new: true });
    res.json(updatedAgente);
});

// Delete an agent
router.delete('/:id', async (req, res) => {
    await Agente.findByIdAndDelete(req.params.id);
    res.json({ message: 'Agent deleted successfully!' });
});

module.exports = router;