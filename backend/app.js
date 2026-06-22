import express from "express";
import { router } from "./app.route.js";
import dotenv from "dotenv";

export const app = express();

app.use(express.json())
dotenv.config();
app.use(router);
