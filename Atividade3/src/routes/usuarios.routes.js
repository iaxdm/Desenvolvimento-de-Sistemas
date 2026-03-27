import {Router} from "express"
import {criarUsuarios, listarUsuarios, listarUsuario, apagarUsuario} from "../controllers/usuarios.controller.js"

export const rotasUsuarios = Router()

rotasUsuarios.get("/usuarios", listarUsuarios)

rotasUsuarios.get("/usuarios/:id", listarUsuario)

rotasUsuarios.post("/usuarios", criarUsuarios)

rotasUsuarios.delete("/usuarios/:id", apagarUsuario)


