import { Request, Response, NextFunction } from "express";
import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import { AppError } from "../errors/AppError";

/*
    Esse UserController é responsável por controlar as requisições
    relacionadas ao usuário autenticado (ex.: consultar os próprios dados).
*/
export class UsuarioController {
  private usuarioRepository: IUsuarioRepository = new UsuarioRepository();
  /*
      Método responsável por retornar os dados do usuário autenticado
      a partir do token informado na requisição.
  */
  async obterUsuarioAutenticado(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const usuarioId = req.user!.id;
      const usuario = await this.usuarioRepository.findById(usuarioId);

      if (!usuario) {
        throw new AppError("Usuário não encontrado", 404);
      }
      res.status(200).json({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        role: usuario.role,
        criadoEm: usuario.criadoEm,
      });
    } catch (error) {
      next(error);
    }
  }
}
