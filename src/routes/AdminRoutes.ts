import { Router } from "express";
import { AdminController } from "../controllers/AdminController";
import { autenticacaoMiddleware } from "../middlewares/autenticacaoMiddleware";
import { authorize } from "../middlewares/roleMiddleware";
import { UsuarioRole } from "../entities/Usuario";

/*
    Esse AdminRoutes é responsável por definir as rotas restritas
    ao perfil Administrador.
*/

// Cria uma instância do Router do Express.
const adminRoutes = Router();

// Cria uma instância do Controller de administração.
const adminController = new AdminController();

adminRoutes.get(
  "/ping",
  autenticacaoMiddleware,
  authorize(UsuarioRole.ADMINISTRADOR),
  (req, res) => adminController.ping(req, res),
);

export default adminRoutes;
