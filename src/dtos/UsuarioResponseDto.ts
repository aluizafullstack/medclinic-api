import { UsuarioRole } from "../entities/Usuario";

/*
    Esse DTO representa os dados que será devolvido para o usuario já existente
*/

export interface UsuarioResponseDto {
  id: string;
  nome: string;
  email: string;
  role: UsuarioRole;
  criadoEm: Date;
}
