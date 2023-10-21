import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./db.js";

const app = express();

db.connect();

app.use(express.json());
app.use(cors());
app.use("/", userRoutes);
app.use(bodyParser.json());

app.listen(8800, () => {
  console.log("Servidor funcionando");
});
