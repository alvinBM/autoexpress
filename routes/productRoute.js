import express from 'express';
import userController from "../controllers/productController"


const router = express.Router();

router.post('/produit', userController.addProduit);
router.get('/produits', userController.getProduit);
router.get('/produit/:id', userController.getProduit);

export default router;