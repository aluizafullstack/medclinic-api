import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { autenticacaoMiddleware } from "../middlewares/autenticacaoMiddleware";

/*
    Esse UserRoutes é responsável por definir as rotas relacionadas
    aos dados do usuário autenticado.
*/

// Cria uma instância do Router do Express.
const usuarioRoutes = Router();

// Cria uma instância do Controller de usuário.
const usuarioController = new UsuarioController();

// Rota responsável por retornar os dados do usuário autenticado.
usuarioRoutes.get("/me", autenticacaoMiddleware, (req, res, next) =>
  usuarioController.obterUsuarioAutenticado(req, res, next),
);

export default usuarioRoutes;
