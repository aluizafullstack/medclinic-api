import { Router } from "express";
import { AutenticacaoController } from "../controllers/AutenticacaoController";

/*
    Esse AutenticacaoRoutes é a definição das rotas de autenticação.
*/

// Criando a instancia do objeto Router e autenticacaoController
const autenticacaoRoutes = Router();
const autenticacaoController = new AutenticacaoController();

// Rotas de itens especificos
autenticacaoRoutes.post("/registrar", autenticacaoController.registrar);

export default autenticacaoRoutes;
