import express from "express"

const porta = 3000
const api = express()

api.use(express.json())

api.listen(3000, () => {
    console.log (`Servidor rodando em http:localhost:${porta}`)
})