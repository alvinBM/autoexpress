import { Op } from 'sequelize';
import formatDate from 'date-format';
import userModel from "../models/productModel";
import product from '../models/productModel';
import productModel from "../models/productModel";
import categoryModel from '../models/categoryModel';

const productController = {
    /***
    * Recuperer les produits
    */
    getProduits: async(req, res) => {

        productModel.findAll({
            order: [['id', 'DESC']],
            include : [{
                model : categoryModel,
                as : 'product_categorie',
                attributes : ['id','libelle']
            }] 
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

    getProduit: (req, res) => {
        res.status(200).json({
            status: 200,
            produits: ""
        })
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

    getProduitsSoldes: (req, res) => {
        res.status(200).json({
            status: 200,
            produits: ""
        })

    },


    /**
     * Recuprer tous les produits by categori Id passer en param en solde (dieumerci)
     */
    getProduitsByCategorie: (req, res) => {

    },

    /**
    * Ajouter un produit
    */

    addProduit: async (req, res) => {
        let { name, description, price, quantity, category, solde, remise } = req.body;

            if(!name || !description || !price || !quantity || !category){
                return res.status(200).json({
                    status: 400,
                    message: "Veuillez remplir tous les champs obligatoire svp"
                });
            }

            let created = formatDate('yyyy-MM-dd hh:mm:ss', new Date());

            let result = await productModel.create({created, name, description, price, quantity, category, solde, remise}).then().catch(er => {
                res.status(200).json({
                    status: 400,
                    message: "Impossible d'enregistrer ce produit"
                });
            });

            if (result) {
                return res.status(200).json({
                    status: 200,
                    message : "Produit créé avec succès",
                    result
                });
            }
    },

}

export default productController;