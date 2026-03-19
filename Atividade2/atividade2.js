import express from "express"

const porta = 3000
const api = express()
const lista = [
    {}
]

// Uma rota GET para retornar todos os produtos e pode ter filtragem por nome ou categoria

api.get("/produtos", (req, res) => {  //rota get
    let resposta = lista //a variável resposta recebe os elementos da lista
    const filtros = req.querry // a constante filtros recebe um requerimento do tipo querry

    if (filtros.nome){  //se estiver filtrando por nome ou seja req.querry.nome
        resposta = resposta.filter((produto) => { // resposta recebe respota com filtro e salva como como a variável produto
            return produto.nome.toLowerCase().includes(filtros.nome.toLowerCase()) //retorna o nome do produto em caixa baixa 
            // produto.nome.toLowerCase() == 
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