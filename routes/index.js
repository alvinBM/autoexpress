import express from 'express';
import userRoute from "./userRoute";
import productRoute from "./productRoute"


const router = express.Router();


router.use('/user', userRoute);
router.use('/produit', productRoute);

export default router;