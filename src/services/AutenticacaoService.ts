import { UsuarioRepository } from "../repositories/UsuarioRepository";
import { IUsuarioRepository } from "../repositories/IUsuarioRepository";
import { RegistrarUsuarioDto } from "../dtos/RegistrarUsuarioDto";
import { AppError } from "../errors/AppError";
import { gerarHashSenha } from "../utils/senhaHash";
import { LoginDto } from "../dtos/LoginDto";
import { LoginResponseDto } from "../dtos/LoginResponseDto";
import { gerarToken } from "../utils/jwt";
import { compararSenha } from "../utils/senhaHash";

/*
    Esse AutenticacaoService é responsável pelas regras de negócio
    relacionadas à autenticação dos usuários (cadastro e login).
*/
// Expressão regular usada para validar o formato básico de um e-mail
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export class AutenticacaoService {
  private usuarioRepository: IUsuarioRepository = new UsuarioRepository();

  // Metodo responsável por cadastrar um novo usuário na API
  async registrar(data: RegistrarUsuarioDto) {
    const { nome, email, senha } = data;

    if (!nome || !email || !senha) {
      throw new AppError("Nome, e-mail e senha são obrigatórios", 400);
    }

    if (!EMAIL_REGEX.test(email)) {
      throw new AppError("Formato de e-mail inválido", 400);
    }

    const usuarioExiste = await this.usuarioRepository.findByEmail(email);
    if (usuarioExiste) {
      throw new AppError("E-mail já cadastrado", 409);
    }

    // Gera o hash da senha -> nunca salva a senha em texto puro.
    const senhaCriptografada = await gerarHashSenha(senha);

    const usuario = await this.usuarioRepository.create({
      nome,
      email,
      senha: senhaCriptografada,
    });

    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      role: usuario.role,
      criadoEm: usuario.criadoEm,
    };
  }

  // Metdod responsável por autenticar um usuario já cadastrado
  async login(data: LoginDto): Promise<LoginResponseDto> {
    const { email, senha } = data;

    if (!email || !senha) {
      throw new AppError("E-mail e senha obrigatório", 400);
    }

    const usuario = await this.usuarioRepository.findByEmail(email);
    if (!usuario) {
      throw new AppError("Credenciais inválidas", 401);
    }

    const senhaValida = await compararSenha(senha, usuario.senha);
    if (!senhaValida) {
      throw new AppError("Credenciais inválidas", 401);
    }

    const token = gerarToken({
      id: usuario.id,
      role: usuario.role,
    });

    return {
      token,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        role: usuario.role,
      },
    };
  }
}
