CREATE TYPE usuario_role AS ENUM ('administrador', 'atendente');

CREATE TABLE usuarios (

    -- gen_random_uuid() gera um identificador único (UUID) automaticamente
    -- a cada nova linha inserida, sem precisar informar o id manualmente

  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  senha VARCHAR NOT NULL,
  role usuario_role NOT NULL DEFAULT 'atendente',
  criadoEm TIMESTAMP NOT NULL DEFAULT now()
);
