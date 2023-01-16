import mongoose from "mongoose";
import app from "../app.js";

const connectDatabase = () => {
  mongoose
    .connect(process.env.CONNECTION_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    })
    .then((req, res) => {
      console.log("Mongodb is connected");
    });
};

export default connectDatabase;
