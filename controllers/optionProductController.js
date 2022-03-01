import { Op } from 'sequelize';
import formatDate from 'date-format';
import optionModel from "../models/optionModel";
import jwt from 'jsonwebtoken';


const optionProductController = {

    /**Creer une option */
    creerOption : async (req, res) => {


        /*create: async (req, res) => {*/
            let { created, option_name, price} = req.body;

            if(!created || !option_name || !price ){
                return res.status(200).json({
                    status: 400,
                    message: "Veuillez remplir tous les champs obligatoire svp"
                });
            }


            let result = await optionModel.create({created, option_name, price}).then().catch(er => {
                res.status(200).json({
                    status: 400,
                    message: "Impossible de creer  cette option"
                });
            });

            if (result) {
                return res.status(200).json({
                    status: 200,
                    message : "Option créé avec succès",
                    result
                });
            }
            
       /* },*/
    },


    /**
     * Recuprrer tous les options
     */
    getOptions : async (req, res) => {

        optionModel.findAll({
            order : [['option_name','DESC']]
        }).then((data) => {
            res.status(200).json({
                status : 200,
                options : data
            })
        }).catch((er) => {
            res.status(200).json({
                status : 400,
                options : null,
                message : "Impossible de recuperer les options",
                error : er
            })
        });
        return res.status(200).json({
            status: 200,
            message: "get options"
        });
        

    },

    /**
     * Recuprrer tous les options
     */
     getOption : async (req, res) => {

        let { id } = req.params;
            optionModel.findOne({
                where : {
                    id : parseInt(id),
                    option_name : option_name,
                }
            }).then((data)=>{
                if(data){
                    res.status(200).json({
                        status : 200,
                        artwork :data
                    })
                }else{
                    res.status(200).json({
                        status : 400,
                        message : "Option introuvable 🙇"
                    })
                }
            }).catch(error => 
                res.status(200).json({
                    status : 404,
                    message : "Impopossible de recuperer cette option 🙇",
                    error : error
                })    
            );



        return res.status(200).json({
            status: 200,
            message: "get option"
        });
    },



}

export default optionProductController;