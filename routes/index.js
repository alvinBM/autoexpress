import express from 'express';
import userRoute from "./userRoute";
import optionRoute from "./optionRoute";


const router = express.Router();


router.use('/user', userRoute);
router.use('/options', optionRoute);
router.use('/categories', categoryRoute);


export default router;