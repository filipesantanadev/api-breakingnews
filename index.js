import express from 'express'

const app = express()

//ROTA
    // Method HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
        // GET - Pega um info
        // POST - Cria uma info
        // PUT - Altera toda a info
        // PATCH - Altera parte da info
        // DELETE - Apaga uma info

// Name - Um identificador da rota

// Function (Callback) - Responsável por executar algum comando


app.get('/soma', (req, res) => {
    const soma = 1 + 1;

    res.send({soma})
})

app.listen(3000)