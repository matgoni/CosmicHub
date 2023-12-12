import AstronautasControllers from "../controllers/AstronautasControllers.js";
import express from "express"
const router = express.Router();

router.get("/Astronautas", AstronautasControllers.apiGetAstronautas)

export default router;