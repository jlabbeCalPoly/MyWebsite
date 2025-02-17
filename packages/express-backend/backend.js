import express from "express";

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
    // ToDo
});

app.listen(port, () => {
    // ToDo
})