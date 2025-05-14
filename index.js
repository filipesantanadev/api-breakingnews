// Importa o módulo Express, que é um framework para criar servidores web em Node.js
const express = require("express");
// Cria uma instância do aplicativo Express
const app = express();

// Importa as rotas relacionadas ao usuário, definidas em outro arquivo
const userRoute = require("./src/routes/user.route");

// Define a porta em que o servidor irá rodar
const port = 3000;

// Configura o Express para aceitar requisições com corpo em formato JSON
app.use(express.json());

// Usa as rotas de usuário para qualquer requisição que comece com "/user"
app.use("/user", userRoute);

// Inicia o servidor e exibe uma mensagem no console quando estiver rodando
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

//*****ESTUDO*******
//ROTA
// Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
// GET - Pega um info
// POST - Cria uma info
// PUT - Altera toda a info
// PATCH - Altera parte da info
// DELETE - Apaga uma info

// Name - Um identificador da rota

// Function (Callback) - Responsável por executar algum comando
