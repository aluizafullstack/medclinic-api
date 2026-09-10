import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import { RegistrarUsuarioDto } from "../dtos/RegistrarUsuarioDto";

export class AutenticacaoService {
  private usuarioRepository: IUsuarioRepository = new UsuarioRepository();

  async registrar(data: RegistrarUsuarioDto) {
    throw new Error("Será implementado ainda...");
  }
}
