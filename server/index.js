import dotenv from "dotenv";
import express from "express";
import productRoutes from "./routes/productRoute.js";
import app from "./app.js";
import mongoose from "mongoose";
import connectDatabase from "./database/database.js";

// Handling uncaught expection.
// Eg:- console.log(youtube)
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Error : ${err.message}`);
  process.exit(1);
});

dotenv.config();
// Connect the database
connectDatabase();

mongoose.connection.on("connected", () => {
  console.log("Mongodb is connected");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working is on https://localhost:${process.env.PORT}`);
});

// Unhanlded Promise Rejection.
// Not properly adding the env details.
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to unhandled promise reejection");

  server.close(() => {
    process.exit(1);
  });
});
