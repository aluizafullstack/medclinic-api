import { Router } from "express";
import autenticacaoRoutes from "./AutenticacaoRoutes";
import usuarioRoutes from "./UsuarioRoutes";

/*
    Esse index é o agregador de rotas.
*/

// Criando a instancia do objeto Router
const router = Router();

router.use("/autenticacao", autenticacaoRoutes);
router.use("/usuarios", usuarioRoutes);

export default router;
