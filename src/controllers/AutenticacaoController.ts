import { Request, Response } from "express";
import { AutenticacaoService } from "../services/AutenticacaoService";

export class AutenticacaoController {
  private autenticacaoService = new AutenticacaoService();

  async registrar(req: Request, res: Response): Promise<void> {
    res.status(501).json({ error: "Ainda não está implementado" });
  }
}
