import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("Logged in successfulyy");
});

router.get("/logout", (req, res) => {
  res.send("Logged out successfulyy");
});

router.get("/singup", (req, res) => {
  res.send("Signed up successfulyy");
});

export default router;
