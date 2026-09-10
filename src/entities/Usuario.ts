import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

// Enum -> para representar as roles dos usuários
export enum UsuarioRole {
  ADMINISTRADOR = "administrador",
  ATENDENTE = "atendente",
}

// Criação da classe
@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 150 })
  nome: string;

  @Column({ type: "varchar", length: 150, unique: true })
  email: string;

  @Column({ type: "varchar" })
  senha: string;

  @Column({ type: "enum", enum: UsuarioRole, default: UsuarioRole.ATENDENTE })
  role: UsuarioRole;

  @CreateDateColumn({ name: "criadoEm" })
  criadoEm: Date;
}
