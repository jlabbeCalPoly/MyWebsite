import mongoose from "mongoose";
import dataModel from "./data.js";
import dotenv from "dotenv";
dotenv.config(); 

mongoose.set("debug", true);

mongoose.connect(
   process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => console.log("Connected to MongoDB"))
 .catch((error) => console.log(error));

function addData(data) {
    const dataToAdd = new dataModel(data);
    const promise = dataToAdd.save();
    return promise;
}

export default {
    addData
}