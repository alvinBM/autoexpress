import express from "express";
import userRoute from "./userRoute";
import commandRoute from "./commandRoute";
import panierRoute from "./panierRoute";
import optionRoute from "./optionRoute";

const router = express.Router();

router.use("/user", userRoute);
router.use("/command", commandRoute);
router.use("/panier", panierRoute);

router.use("/user", userRoute);
router.use("/options", optionRoute);

export default router;
