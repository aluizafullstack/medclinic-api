import { Request, Response } from "express";

/*
    Esse AdminController é responsável por controlar requisições
    restritas ao perfil Administrador, usadas para demonstrar
    o funcionamento da autorização baseada em perfis (RBAC).
*/

export class AdminController {
  // Metodo de verificação -> confirma que o usuario autenticado tem o perfil de adm
  //e pode acessar recursos restritos
  ping(req: Request, res: Response): void {
    res.status(200).json({
      message: "ping - acesso de administrador confirmado",
      usuario: req.user,
    });
  }
}
