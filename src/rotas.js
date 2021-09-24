const express = require('express');
const conteiner = require('./controladores/conteiner');
const movimentacao = require('./controladores/movimentacao');

const rotas = express();

rotas.get('/conteiner', conteiner.consultarConteiner);
rotas.get('/conteiner/:id', conteiner.consultarConteiner);
rotas.post('/conteiner', conteiner.cadastrarConteiner);
rotas.put('/conteiner', conteiner.editarConteiner);
rotas.delete('/conteiner', conteiner.deletarConteiner);

rotas.get('/movimentacao', movimentacao.consultarMovimentacao);
rotas.get('/movimentacao/:id', movimentacao.consultarMovimentacao);
rotas.post('/movimentacao', movimentacao.cadastrarMovimentacao);
rotas.put('/movimentacao', movimentacao.editarMovimentacao);
rotas.delete('/movimentacao', movimentacao.deletarMovimentacao);

rotas.get('/relatorios', movimentacao.gerarRelatorio);

module.exports = rotas;