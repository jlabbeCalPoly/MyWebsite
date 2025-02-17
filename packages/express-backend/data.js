import mongoose from "mongoose";

const DataSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
          if (value.length < 10)
            throw new Error("Invalid email, must be at least 10 characters.");
        },
      },
      phone: {
        type: String,
        required: false,
        trim: true,
      },
      subject: {
        type: String,
        required: false,
        trim: true,
      },
      message: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (value.length > 1000)
              throw new Error("Invalid message, too many characters.");
          },
      },
    },
    { collection: "Collection0" }
  );

const Data = mongoose.model("Data", DataSchema);

export default Data;