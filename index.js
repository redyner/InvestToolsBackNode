const express = require('express');
const bodyParser = require('body-parser');
const CalcularExecutor = require('./calcularExecutor');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/calcular', async (req, res) => {
  const calcularExecutor = new CalcularExecutor();
  const resultadoCalculo = await calcularExecutor.Calcular(req.body);
  res.json(resultadoCalculo);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
