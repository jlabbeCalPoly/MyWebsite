import express from "express";
import cors from "cors";
import services from "../data-services.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("success");
});

app.post("/form", (req, res) => {
  let dataToAdd = req.body;
  if (dataToAdd.name != undefined && dataToAdd.email != undefined && dataToAdd.message != undefined) {
    console.log("correct data");
    services
      .addData(dataToAdd)
      .then((mongoRes) => {
        res.status(201).send("fromPost");
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send("failure to submit form, please try again");
      });
  } else {
    console.log("invalid data");
    res.status(404).send("invalid form data");
  }
});

export default app;
