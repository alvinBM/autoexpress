import express from 'express';
import userController from "../controllers/productController"


const router = express.Router();

router.post('/', userController.addProduit);
router.get('/produits', userController.getProduits);
router.get('/:id', userController.getProduit);

export default router;