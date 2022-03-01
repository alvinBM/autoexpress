import express from 'express';
import productController from "../controllers/productController"


const router = express.Router();

router.post('/', productController.addProduit);
router.get('/', productController.getProduits);
router.get('/:id', productController.getProduit);
router.get('/solde', productController.getProduitsSoldes);
router.get('/categorie/:id', productController.getProduitsByCategorie);

export default router;