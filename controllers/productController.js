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
     * Recuprer un cproduit
     */

    getProduis: (req,res)=>{

    },

     /**
     * Ajouter un produit
     */

         addProduis: (req,res)=>{

        },
    
}

export default productController;