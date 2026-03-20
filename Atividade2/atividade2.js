import express from "express"

const porta = 3000
const api = express()

//Uma variável de lista inicialmente vazia

const lista = [
    
]

// Uma rota GET para retornar todos os produtos e pode ter filtragem por nome ou categoria

api.use(express.json())

api.get("/produtos/", (req, res) => {
    let resposta = lista
    const filtros = req.query

    if (filtros.nome){
        resposta = resposta.filter((produto) => {
            return produto.nome.toLowerCase().includes(filtros.nome.toLowerCase())
        
        })
    }

    if (filtros.categoria) {
        resposta = resposta.filter((produto) => {
            return produto.categoria.toLowerCase().includes(filtros.categoria.toLowerCase())
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

    if (produto.id == null || produto.nome == null || produto.preco == null || produto.categoria == null)
        return res.json({
            mensagem: "Informações faltantdo"
    })
    
    lista.push (produto)
    res.json({
        mensagem: "Produto adicionado a lista"
    })
})

//Uma rota GET para retornar apenas um produto em específico pelo id

api.get("/produtos/:id", (req, res) => {
    const id = req.params.id

    res.json(lista.filter((filtro) => {
        return filtro.id == id 
    }))
})

//Uma rota PUT / PATCH para atualizar um registro

api.put("/produtos/:id", (req,res) => {
    const id = req.params.id
    const dados = req.body

    const indice = lista.findIndex((produto) => {
        return produto.id == id
    })

    if (dados.nome && dados.preco && dados.categoria){
        lista[indice] = {
            id: id,
            nome: dados.nome,
            preco: dados.preco,
            categoria: dados.categoria
        }

        res.json({
            mensagem: "Dados do produto atualizados",
            produto: lista[indice]
        })
    }else{
        return res.json({
            mensagem: "Dados faltando para atualizar"
        })
    }
})

//Uma rota DELETE para remover um registro

api.delete("/produtos/:id", (req, res) => {
    const id = req.params.id
    const indice = lista.findIndex((produto) => {
        return produto.id == id
    })

    if(indice == -1){
        return res.json({
            mensagem: "Produto não encontrado"
        })
    }

    lista.splice(indice, 1)

    res.json({
        mensagem: `Produto com id ${id} foi apagada`
    })
})