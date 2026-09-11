import { Request, Response, NextFunction } from "express";

/*
    Esse UserController é responsável por controlar as requisições
    relacionadas ao usuário autenticado (ex.: consultar os próprios dados).
*/
export class UsuarioController {
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
      res.status(200).json({ usuario: req.user });
    } catch (error) {
      next(error);
    }
  }
}
