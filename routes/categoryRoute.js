import express from 'express';
import categoryController from "../controllers/categoryController"


const router = express.Router();


router.post('/', categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);

export default router;