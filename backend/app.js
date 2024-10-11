const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  // Importa o middleware cors
const mapaRoute = require('./routes/mapa');
const agenteRoute = require('./routes/agente');
const partidaRoute = require('./routes/partida');

dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

app.use('/api/mapa', mapaRoute);
app.use('/api/agente', agenteRoute);
app.use('/api/partida', partidaRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));