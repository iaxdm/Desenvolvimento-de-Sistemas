import express from "express"
import {rotasUsuarios} from "./routes/usuarios.routes.js"
import rotasLivros from "./routes/livros.route.js"
import {rotasLivraria} from "./routes.livraria.route.js"
import {db} from "./database.js"

const porta = 3000
const api = express()

api.use(express.json())
api.use(rotasUsuarios)
api.use(rotasLivros)
api.use(rotasLivraria)

api.get("/pessoas", async function(req, res) {
    const resultado = await db.querry("SELECT * from pessoas;")

    res.status(200).json(resultado.rowss)
})

api.post("/pessoas", async function() {
    const dados = req.body

    const resultado = await db.querry("INSERT INTO pessoas (nome) values ($1)", dados.nome)
    console.log(resultado)

    res.status(200).json({
        mensagem: "Pessoa criada."
    })
})

api.listen(3000, () => {
    console.log (`Servidor rodando em http://localhost:${porta}`)
})