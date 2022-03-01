import express from "express";
import userRoute from "./userRoute";
import commandRoute from "./commandRoute";
import panierRoute from "./panierRoute";

const router = express.Router();

router.use("/user", userRoute);
router.use("/command", commandRoute);
router.use("/panier", panierRoute);

export default router;
