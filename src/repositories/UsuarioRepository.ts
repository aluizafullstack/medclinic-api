import { AppDataSource } from "../database/data-source";
import { Usuario } from "../entities/Usuario";
import { IUsuarioRepository } from "./IUsuarioRepository";

// Criação da classe
export class UsuarioRepository implements IUsuarioRepository {
  private repository = AppDataSource.getRepository(Usuario);

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.repository.findOneBy({ email });
  }

  async findById(id: string): Promise<Usuario | null> {
    return this.repository.findOneBy({ id });
  }

  async create(dadosUsuario: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.repository.create(dadosUsuario);
    return this.repository.save(usuario);
  }
}
