import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { UsuarioRole } from "../entities/Usuario";

/*
    Essa função cria um middleware que pode ser usado
    em diferentes rotas e permite definir quais funções
    de usuário podem acessar cada rota.

*/

export function authorize(...funcoesPermitidas: UsuarioRole[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Obtém a função (role) do usuario autenticado
    const funcaoUsuario = req.user?.role as UsuarioRole | undefined;

    if (!funcaoUsuario || !funcoesPermitidas.includes(funcaoUsuario)) {
      throw new AppError(
        "Você não tem permissão para acessar este recurso",
        403,
      );
    }
    // Permite que a requisição continue
    next();
  };
}
