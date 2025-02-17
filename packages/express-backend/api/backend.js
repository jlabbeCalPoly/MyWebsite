import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("success").status(200);
});

app.post("/form", (req, res) => {
  res.status(204).send();
});

export default app;