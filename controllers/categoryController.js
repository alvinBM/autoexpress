import { Op } from 'sequelize';
import formatDate from 'date-format';
import bcrypt from 'bcrypt';
import categoryModel from "../models/categoryModel";
import jwt from 'jsonwebtoken';


const categoryController = {

     /**
         * creer une category
         */
        createCategory: async (req, res) => {
            let { libelle, description } = req.body;

            if(!libelle || !description){
                return res.status(200).json({
                    status: 400,
                    message: "Veuillez remplir tous les champs obligatoire svp"
                });
            }

        
            let created = formatDate('yyyy-MM-dd hh:mm:ss', new Date());

            let result = await categoryModel.create({created, libelle, description}).then().catch(er => {
                res.status(200).json({
                    status: 400,
                    message: "Impossible d'enregistrer cette la categorie"
                });
            });

            if (result) {
                return res.status(200).json({
                    status: 200,
                    message : "Categorie créé avec succès",
                    result
                });
            }
            
        },
    /***
     * Recuperer les categories
     */
     getCategories: async (req, res) => {
            
        categoryModel.findAll({
            order : [['id','DESC']]
        }).then((data) => {
            res.status(200).json({
                status : 200,
                categories : data
            })
        }).catch((er) => {
            res.status(200).json({
                status : 400,
                categories : null,
                message : "Impossible de recuperer les categories",
                error : er
            })
        });

    }, 

     /***
         * Recuperer une categorie
         */
      getCategory: async (req, res) => {
            
        let { id } = req.params;
        categoryModel.findOne({
            where : {
                id : parseInt(id),
                // role : 2
            }
        }).then((data)=>{
            if(data){
                res.status(200).json({
                    status : 200,
                    categories :data
                })
            }else{
                res.status(200).json({
                    status : 400,
                    message : "Categorie introuvable 🙇"
                })
            }
        }).catch(error => 
            res.status(200).json({
                status : 404,
                message : "Impopossible de recuperer la categorie 🙇",
                error : error
            })    
        );

    }, 


}

export default categoryController;