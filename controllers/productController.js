import { Op } from 'sequelize';
import formatDate from 'date-format';
import userModel from "../models/productModel";


const productController = {
     /***
     * Recuperer les produits
     */
    getProduits: (req, res) => {
            
        productModel.findAll({
            order : [['id','DESC']]
        }).then((data) => {
            res.status(200).json({
                status : 200,
                produits : data
            })
        }).catch((er) => {
            res.status(200).json({
                status : 400,
                produits : null,
                message : "Impossible de recuperer les produits",
                error : er
            })
        });

    }, 

    /**
     * Recuprer un cproduit (victore)
     */

    getProduit: (req,res)=>{
        res.status(200).json({
            status : 200,
            produits : ""
        })
    },

    /**
     * Recuprer tous les produits en solde (victore)
     */

     getProduitsSoldes: (req,res)=>{
        res.status(200).json({
            status : 200,
            produits : ""
        })
    },


    /**
     * Recuprer tous les produits by categori Id passer en param en solde (dieumerci)
     */
    getProduitsByCategorie : (req, res) => {

    }

     /**
     * Ajouter un produit
     */

    addProduit: (req,res)=>{
        res.status(200).json({
            status : 200,
            produits : ""
        })
    },
    
}

export default productController;