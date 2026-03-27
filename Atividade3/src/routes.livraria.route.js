import {Router} from "express"
import {reservar} from "./controllers/livraria.controller.js"

export const rotasLivraria = Router()

rotasLivraria.post("reserva/:livroId/:usuarioId", reservar)