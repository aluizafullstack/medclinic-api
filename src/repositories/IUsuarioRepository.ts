import { Usuario } from "../entities/Usuario";

export interface IUsuarioRepository {
  findByEmail(email: string): Promise<Usuario | null>;
  findById(id: string): Promise<Usuario | null>;

  /*

        Partial -> só gera automaticamente o nome, email e senha
        se for tipado direto como Usuario ixigiria todos os campos
        preenchidos, como o id e criadoEm

  */
  create(dadosUsuario: Partial<Usuario>): Promise<Usuario>;
}
