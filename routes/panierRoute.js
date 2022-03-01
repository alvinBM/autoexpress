import express from "express";
import panierCtrl from "../controllers/panierController";

const router = express.Router();

router.get("/", panierCtrl.getPaniers);

export default router;
