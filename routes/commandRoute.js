import express from "express";
import commandCtrl from "../controllers/commandController";

const router = express.Router();

router.get("/", commandCtrl.getCommands);

export default router;
