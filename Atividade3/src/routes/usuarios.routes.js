import {Router} from "express"
import { listarUsuarios } from "../controllers/usuarios.controller.js"

const router = Router()

router.get("/usuarios, listarUsuarios") //rotas

router.post("/usuarios", criarUsuario)  //rota para criar usuario

export default router