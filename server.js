import conn from './config/conn.js';
import express from 'express';

const PORT = 3333

const app = express();

import Usuario from './models/usuarioModel.js';
import Perfil from './models/perfilModel.js';
import Postagem from './models/postagemModel.js';
import Comentario from './models/comentariosModel.js';

app.get("/", (req, res) => {
    res.send("Hello World!")
})

conn
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`servidor on na porta${PORT}`)
        })        
    })
    .catch((err) => console.log(err))

