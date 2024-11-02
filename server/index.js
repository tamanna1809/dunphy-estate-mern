import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js"

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json()); //backend se post request kari but json main input allowed nhi h so ye likhna padhta h

app.listen(3003, () => {
  console.log("Server is running on port 3003!!!");
});

app.use("/api/user", userRouter); // all routes should be defined in index.js
app.use("/api/auth", authRouter);
