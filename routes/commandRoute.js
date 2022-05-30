import express from "express";
import commandCtrl from "../controllers/commandController";

const router = express.Router();

router.get("/", commandCtrl.getCommands);
router.get("/byStatus/:status", commandCtrl.getCommandByStatus);
router.put("/:id", commandCtrl.updateStatusCommand);
router.get("/:id", commandCtrl.getCommand);
router.get("/user/:id", commandCtrl.getCommandeByUser);
router.post("/", commandCtrl.createCommande);

export default router;
