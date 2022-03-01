import express from 'express';
import optionProductController from "../controllers/optionProductController"


const router = express.Router();


router.post('/', optionProductController.creerOption);
router.get('/', optionProductController.getOptions);
router.get('/:id', optionProductController.getOption);

export default router;