/*

    Especificação de erros que pode acontecer na validação no Service.
    Que será retornado (objeto) para Controller e ele monta response com esse objeto

*/
export class AppError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: number = 400,
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
