import { Router } from "express";
import autenticacaoRoutes from "./AutenticacaoRoutes";

/*
    Esse index é o agregador de rotas.
*/

// Criando a instancia do objeto Router
const router = Router();

router.use("/autenticacao", autenticacaoRoutes);

export default router;
