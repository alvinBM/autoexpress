import express from "express";
import commandCtrl from "../controllers/commandController";

const router = express.Router();

router.get("/", commandCtrl.getCommands);
router.get("/:id", commandCtrl.getCommande);
router.get("/user/:id", commandCtrl.getCommandeByUser);
router.post("/", commandCtrl.createCommande);

export default router;
