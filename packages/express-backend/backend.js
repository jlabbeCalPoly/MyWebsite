import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  // ToDo
});

app.listen(port, () => {
  // ToDo
});

module.exports = app;
