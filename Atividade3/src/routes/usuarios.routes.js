import {Router} from "express"
import {criarUsuarios, listarUsuarios, listarUsuario, apagarUsuario} from "../controllers/usuarios.controller.js"

export const rotas = Router()

rotas.get("/usuarios", listarUsuarios)

rotas.get("/usuarios/:id", listarUsuario)

rotas.post("/usuarios", criarUsuarios)

rotas.delete("/usuarios/:id", apagarUsuario)


