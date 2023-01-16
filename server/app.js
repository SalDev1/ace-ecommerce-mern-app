import express from "express";
import products from "./routes/productRoute.js";
import errorMiddleware from "./middleware/error.js";
import user from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import order from "./routes/orderRoute.js";

var app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", products);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middleware for error.
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.json("Welcome to the API");
});

export default app;