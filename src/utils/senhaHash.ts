import bcrypt from "bcrypt";

/*
    Esse arquivo é responsável por criptografar senhas
    e comparar senhas com seus respectivos hashes.
*/

// Define a quantidade de vezes que o bcrypt processará a senha.
const RODADAS_SENHA = 10;

// Função responsável por transformar a senha em um código seguro (hash).
export async function gerarHashSenha(senha: string): Promise<string> {
  return bcrypt.hash(senha, RODADAS_SENHA);
}

// Função responsável por comparar uma senha com o hash armazenado no banco de dados.
export async function compararSenha(
  senha: string,
  senhaHash: string,
): Promise<boolean> {
  return bcrypt.compare(senha, senhaHash);
}
