import express from 'express';
import userController from "../controllers/userController"


const router = express.Router();


router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/clients', userController.getClients);
router.get('/clients/:id', userController.getClient);

export default router;