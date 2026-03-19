import express from "express"

const porta = 3000
const api = express()

//Uma variável de lista inicialmente vazia

const lista = [
    {}
]

// Uma rota GET para retornar todos os produtos e pode ter filtragem por nome ou categoria

api.get("/produtos", (req, res) => {
    let resposta = lista
    const filtros = req.params

    if (filtros.nome){
        resposta = resposta.filter((produto) => {
            return produto.nome.toLowerCase().includes(filtros.nome.toLowerCase())
        
        })
    }

    if (filtros.categoria) {
        resposta = resposta.filter((produto) => {
            return tipo.categoria.toLowerCase().includes(filtros.categoria.toLowerCase())
        })
    }

    res.json(resposta)
})

api.listen(porta, () =>{
    console.log(`Servidor está rodando em http://localhost:${porta}`)
})

// Uma rota POST para criar os produtos

api.post("/produtos", (req, res) => {
    const produto = req.body

    if (produto.id == null || produto.nome ==null || produto.preco == null || produto.categoria ==null)
        return res.json({
            mensagem "Informações faltantdo"
    })
            
})