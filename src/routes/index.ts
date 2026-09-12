import { Router } from "express";
import autenticacaoRoutes from "./AutenticacaoRoutes";
import usuarioRoutes from "./UsuarioRoutes";
import adminRoutes from "./AdminRoutes";

/*
    Esse index é o agregador de rotas.
*/

// Criando a instancia do objeto Router
const router = Router();

router.use("/autenticacao", autenticacaoRoutes);
router.use("/usuarios", usuarioRoutes);
router.use("/admin", adminRoutes);

export default router;
