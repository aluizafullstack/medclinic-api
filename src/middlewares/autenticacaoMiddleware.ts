import { Request, Response, NextFunction } from "express";
import { verificarToken } from "../utils/jwt";
import { AppError } from "../errors/AppError";

export function autenticacaoMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const autenticarHeader = req.headers.authorization;

  if (!autenticarHeader) {
    throw new AppError("Token não informado", 401);
  }

  const [scheme, token] = autenticarHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    throw new AppError("Formato de token inválido", 401);
  }

  try {
    const payload = verificarToken(token);
    req.user = payload;
    next();
  } catch (error) {
    throw new AppError("Token inválido ou expirado", 401);
  }
}
