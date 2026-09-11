export interface LoginResponseDto {
  token: string;
  usuario: {
    id: string;
    nome: string;
    email: string;
    role: string;
  };
}
