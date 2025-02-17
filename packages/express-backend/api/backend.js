import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/backend", (req, res) => {
  res.send("Request recieved").status(200);
});

app.listen(port, () => {
  console.log("listening to port...");
});

export default app;