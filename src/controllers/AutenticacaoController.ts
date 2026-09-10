import { Request, Response, NextFunction } from "express";
import { AutenticacaoService } from "../services/AutenticacaoService";

/*
  Esse AutenticacaoController é responsável por controlar
  as requisições relacionadas à autenticação dos usuários.
*/

export class AutenticacaoController {
  // Cria uma instância do serviço responsável pelas regras de autenticação.
  private autenticacaoService = new AutenticacaoService();

  async registrar(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const usuario = await this.autenticacaoService.registrar(req.body);
      res.status(201).json(usuario);
    } catch (error) {
      next(error);
    }
  }
}
