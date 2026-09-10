import express, { Express, Request, Response } from "express";
import { AppDataSource } from "./database/data-source";

// Criando a instancia do Express
const app = express();
const PORT = 3000;

// Rota de health-check -> Veificando se aplicação está ok
app.get("/health-check", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    timeStamp: new Date().toISOString(),
  });
});

// Rota desconhecida -> 404
app.use((_: unknown, res: Response) =>
  res.status(404).json({ error: "Rota não encontrada" }),
);

// Conecta ao banco de dados e só depois Inicia o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Conexão com o banco de dados da MedClinic estabelecida");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor da MedClinic API rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar com o banco de dados:", error);
  });
