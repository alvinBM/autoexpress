import { Op } from 'sequelize';
import formatDate from 'date-format';
import userModel from "../models/productModel";
import product from '../models/productModel';


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
     * Recuprer un cproduit (victore)
     */

    getProduit: (req,res)=>{

        let {id} = req.params;
        product.findOne({
            where:{
                id :parseInt(id)
            }

        }).then((data)=>{

            if (data) {
                res.status(200).json({
                    status :200,
                    product :data
                })
            
            } else {
                res.status(200).json({
                    status: 400,
                    message: "Produit introuvable"
                })               
            }     
        }).catch(error=>
            res.status(200).json({
                status: 404,
                message: "impossible de recuperer le produit",
                error: error 
            })
            )
    },

    /**
     * Recuprer tous les produits en solde (victore)
     */

     getProduitsSoldes: (req,res)=>{

        product.findAll({
            where:{
                solde: 1
            },
            order : [['id','DESC']]
        }).then((data)=>{

            if (data) {
                res.status(200).json({
                    status :200,
                    product :data
                })
            
            } else {
                res.status(200).json({
                    status: 400,
                    message: "Produits soldés introuvables"
                })               
            }     
        }).catch(error=>
            res.status(200).json({
                status: 404,
                message: "impossible de recuperer les produits soldés ",
                // error: error 
            })
            )
    },


    /**
     * Recuprer tous les produits by categori Id passer en param en solde (dieumerci)
     */
    getProduitsByCategorie : (req, res) => {

    },

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