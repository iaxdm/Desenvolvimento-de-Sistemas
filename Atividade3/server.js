import express from "express"
import usuariosRoutes from "./routes/usuarios.routes.js"

const porta = 3000
const api = express()

api.use(express.json())
api.use(usuariosRoutes)

api.listen(3000, () => {
    console.log (`Servidor rodando em http:localhost:${porta}`)
})