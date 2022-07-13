import express from "express";
import panierCtrl from "../controllers/panierController";

const router = express.Router();

router.get("/", panierCtrl.getPaniers);
router.get("/byCommand/:idCommand", panierCtrl.getPaniersByCommand);

export default router;
