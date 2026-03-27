import {Router} from "express"
import { criarLivro, listarLivros } from "../controllers/livros.controller.js"

const rotasLivros = Router()

rotasLivros.get("/livros", listarLivros)
rotasLivros.post("/livros", criarLivro)

export default rotasLivros