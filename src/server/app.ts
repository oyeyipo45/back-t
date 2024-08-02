import express from "express";
import { db } from "../Config/db.config";
import { router } from "../Routes/posts.routes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

// middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/v1/posts", router);

//db connection then server connection
db.then(() => {
  app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`));
});
