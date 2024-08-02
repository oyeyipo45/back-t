import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv?.config();

// Envirionment variabled
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DB_NAME = process.env.DB_NAME;


// connection string to mongo atlas
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@lenda.padmy06.mongodb.net/?retryWrites=true&w=majority&appName=${DB_NAME}`;

const options = {
  autoIndex: false,
  socketTimeoutMS: 45000,
  family: 4,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
};

//db connection
export const db = mongoose
  .connect(uri, options)
  .then((res) => {
    if (res) {
      console.log(`Database connection successfully to ${DB_NAME}`);
    }
  })
  .catch((err) => {
    console.log(err);
  });
