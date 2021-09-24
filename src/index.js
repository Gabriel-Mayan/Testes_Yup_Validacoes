const express = require('express');

const app = express();
const rptas = require('./rotas');

app.use(express.json());
app.use(rotas);

app.listen(8000);