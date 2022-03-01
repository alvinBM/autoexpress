import express from "express";
import commandCtrl from "../controllers/commandController";

const router = express.Router();

router.get("/", commandCtrl.getCommands);
router.get("/:status", commandCtrl.getCommandByStatus);
router.put("/:id", commandCtrl.updateStatusCommand);

export default router;
