import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }

  // Se não for um erro do AppError, e não pode ser exposto para o cliente
  console.error("[ERRO INESPERADO]", err);
  res.status(500).json({ error: "Erro interno no servidor" });
}
