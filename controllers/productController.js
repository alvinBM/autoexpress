import { Op } from 'sequelize';
import formatDate from 'date-format';
import userModel from "../models/productModel";


const productController = {
    /***
        * Recuperer les produits
        */
    getProduits: (req, res) => {

        productModel.findAll({
            order: [['id', 'DESC']]
        }).then((data) => {
            res.status(200).json({
                status: 200,
                produits: data
            })
        }).catch((er) => {
            res.status(200).json({
                status: 400,
                produits: null,
                message: "Impossible de recuperer les produits",
                error: er
            })
        });

    },

    /**
     * Récuprer un produit
     */

    getProduit: (req, res) => {
        let { id } = req.params;
        userModel.findOne({
            where: {
                id: parseInt(id),
            }
        }).then((data) => {
            if (data) {
                res.status(200).json({
                    status: 200,
                    artwork: data
                })
            } else {
                res.status(200).json({
                    status: 400,
                    message: "Produit introuvable 🙇"
                })
            }
        }).catch(error =>
            res.status(200).json({
                status: 404,
                message: "Impopossible de recuperer le produit 🙇",
                error: error
            })
        );

    },

    /**
    * Ajouter un produit
    */

    addProduit: async(req, res) => {
        let { name, description, price, quantity, category, solde, remise } = req.body;

        if(!name || !description || !price || !quantity || !category){
            return res.status(200).json({
                status: 400,
                message: "Veuillez remplir tous les champs obligatoire svp"
            });
        }

        let created = formatDate('yyyy-MM-dd hh:mm:ss', new Date());

        let result = await productModel.create({created, name, description,price, quantity, category, solde, remise}).then().catch(er => {
            res.status(200).json({
                status: 400,
                message: "Impossible d'enregistrer cette le produit"
            });
        });

        if (result) {
            return res.status(200).json({
                status: 200,
                message : "Produit ajouté avec succès",
                result
            });
        }
    },

}

export default productController;