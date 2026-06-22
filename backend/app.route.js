import express from "express";

export const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome to home page");
});

router.get("/getusers", (req, res, next) => {
  res.send("Get users data");
});

router.get("/addusers", (req, res, next) => {
  res.send("Add user here");
});
