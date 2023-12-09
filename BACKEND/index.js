import "dotenv/config";
import "./api/conectdb.js"
import dotenv from 'dotenv';
import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({ok: true});
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("🛰️ 🛰️   http://localhost:" + PORT));