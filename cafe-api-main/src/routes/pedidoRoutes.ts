import {Router} from "express";
import {deletarPedido, postPedido} from "../controllers/pedidoController.js";
import { getPedidos } from "../controllers/pedidoController.js";

const router = Router();

router.post("/", postPedido);
router.get("/", getPedidos);
router.delete("/:id", deletarPedido);

export const pedidosRoutes = router;