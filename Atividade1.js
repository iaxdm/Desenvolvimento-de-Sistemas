import biblioteca from 'express'

const porta = 3000
const app = biblioteca()

app.get('/home', (req, res) => {})

app.get('/produto/:id', (req, res) => {
    const id = req.params.id
    const preco = id * 10

    res.json({
        nome: `Produto ${id}`,
        preco: preco
    })
})

app.listen(porta, () => {
    console.log(`O servidor está rodando em http://localhost:${porta}`)
})