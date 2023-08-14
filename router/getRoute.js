import express from "express";
import { getCommodities, getQuality } from "../controller/getData.js";

const router = express.Router();

router.get("/commodities",getCommodities);
router.get("/qualities/:name",getQuality);

export default router;