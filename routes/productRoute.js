import express from 'express';
import productController from "../controllers/productController"


const router = express.Router();

router.post('/', productController.addProduit);
router.get('/', productController.getProduits);
router.get('/:id', productController.getProduit);

export default router;