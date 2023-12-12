import "dotenv/config";
import "./api/conectdb.js";
import express from "express";
import CosmicHubRouter from './api/routes/CosmicHubRoutes.js';

const app = express();
app.use("/", CosmicHubRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("🛰️ 🛰️ http://localhost:" + PORT));
