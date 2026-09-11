import { Router, Request, Response, NextFunction } from "express";
import { AutenticacaoController } from "../controllers/AutenticacaoController";

/*
    Esse AutenticacaoRoutes é a definição das rotas de autenticação.
*/

// Criando a instancia do objeto Router e autenticacaoController
const autenticacaoRoutes = Router();
const autenticacaoController = new AutenticacaoController();

// Rotas de itens especificos
autenticacaoRoutes.post(
  "/registrar",
  (req: Request, res: Response, next: NextFunction) =>
    autenticacaoController.registrar(req, res, next),
);

autenticacaoRoutes.post("/login", (req, res, next) =>
  autenticacaoController.login(req, res, next),
);

export default autenticacaoRoutes;
