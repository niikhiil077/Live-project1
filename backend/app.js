import express from "express";
import { router } from "./app.route.js";


export const app = express();

app.use(express.json())
app.use(router);
