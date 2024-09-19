// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simulação de banco de dados em memória
let produtos = [];
let clientes = [];

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem vindo a Api - Senai Market v 1.0');
});

// Rota para produtos
app.route('/produtos')
    .get((req, res) => {
        res.json(produtos);
    })
    .post((req, res) => {
        const { nome, qtde, valor } = req.body;
        const novoProduto = { nome, qtde, valor };
        produtos.push(novoProduto);
        res.status(201).json(novoProduto);
    });

// Rota para clientes
app.route('/clientes')
    .get((req, res) => {
        res.json(clientes);
    })
    .post((req, res) => {
        const { login, senha } = req.body;
        const novoCliente = { login, senha };
        clientes.push(novoCliente);
        res.status(201).json(novoCliente);
    });

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
