import express from "express";
import cors from "cors";
//import services from "../data-services.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("success");
});

app.post("/form", (req, res) => {
  res.status(201).send("fromPost")
  /*  const name = req.query.name;
  const email = req.query.email;
  const message = req.query.message;
  if (name != undefined && email != undefined && message != undefined) {
    console.log("correct data");
    let dataToAdd = req.body;
    services
      .addData(dataToAdd)
      .then((mongoRes) => {
        res.send(mongoRes).status(201);
      })
      .catch((error) => {
        console.log(error);
        res.status(404);
      });
  } else {
    console.log("incorrect data");
    res.status(404);
  }*/
});

export default app;
