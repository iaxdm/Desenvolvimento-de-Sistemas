import {usuarios} from "..data/usuarios.js"

export function listarUsuarios (req, res) {  //apresenta a lista
    res.json(usuarios)  
}

export function criarusuario(req, res){  //função para criar novo usuário
    const {id, nome} = req.body;
}

    if(!id || !nome) { //Verifica se tem todas as informações
        return res.json({
            mensagem: "Dados faltando"
        })
    }

    const novoUsuario = {
        id,
        nome
    }

usuarios.push(novoUsuario)  //adiciona um novo usuário na lista
return res.json({
    mensagem: "Novo usuário adicionado"
})