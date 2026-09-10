import express, { Express, Request, Response } from "express";

// Criando a instancias
const app = express();
const PORT = 3000;

// Rota de health-check -> Veificando se aplicação está ok
app.get("/health-check", (req: Request, res: Response) => {
  res.json({
    status: "OK",
    timeStamp: new Date().toISOString(),
  });
});

// Rota desconhecida 404
app.use((_: unknown, res: Response) =>
  res.status(404).json({ error: "Rota não encontrada" }),
);

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor da MedClinic API rodando na porta ${PORT}`);
});
