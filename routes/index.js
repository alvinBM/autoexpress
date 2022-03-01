import express from "express";
import userRoute from "./userRoute";
import productRoute from "./productRoute"

import commandRoute from "./commandRoute";
import panierRoute from "./panierRoute";
import optionRoute from "./optionRoute";
import categoryRoute from "./categoryRoute"

const router = express.Router();

router.use("/user", userRoute);
router.use("/command", commandRoute);
router.use("/panier", panierRoute);
router.use('/produit', productRoute);
router.use("/options", optionRoute);
router.use('/categories', categoryRoute);


export default router;

