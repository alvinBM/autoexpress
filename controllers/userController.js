import { Op } from 'sequelize';
import formatDate from 'date-format';
import bcrypt from 'bcrypt';
import userModel from "../models/userModel";
import jwt from 'jsonwebtoken';


const userController = {

        /**
         * Login user
         */
        login: async (req, res) => {
            let result = await userModel.findOne({
                where: {
                    phone: req.body.phone
                }
            }).then().catch(er => console.error(er));
            if (result) {
                let is_logged = await bcrypt.compare(req.body.password, result.password);
                if (is_logged) {
                    const token = jwt.sign({
                            user_id: result.id,
                            role_id: result.type,
                        },
                        process.env.secret_token, 
                        {
                            expiresIn: process.env.expire_token
                        });
                    return res.status(200).json({
                        status: 200,
                        loged: true,
                        token,
                        user: {
                            id: result.id,
                            nom: result.name,
                            nom: result.lastname,
                            email: result.email
                        }
                    });
                }
            }else{
                return res.status(200).json({
                    status: 400,
                    message: "Login Mot de passe incorrect"
                });
            }

            res.status(200).json({
                status: 400,
                message: "impossible de connectez cette utilisateur"
            });
        }, 

        /**
         * Enregistrer user
         */
        register: async (req, res) => {
            let { name, lastname, email, phone, photo, password, role } = req.body;

            if(!name || !lastname || !email || !phone || !password){
                return res.status(200).json({
                    status: 400,
                    message: "Veuillez remplir tous les champs obligatoire svp"
                });
            }

            password = await bcrypt.hash(password, 10);
            let created = formatDate('yyyy-MM-dd hh:mm:ss', new Date());

            let result = await userModel.create({created, name, lastname, email, phone, photo, password, role}).then().catch(er => console.error(er));
            if (result) {
                return res.status(200).json({
                    status: 200,
                    result
                });
            }
            res.status(200).json({
                status: 400,
                message: "Impossible d'enregistrer cette le client"
            });
        },

        /***
         * Recuperer les clients
         */
        getClients: (req, res) => {
            
            userModel.findAll({
                where:{
                    role : 1
                },
                order : [['id','DESC']]
            }).then((data) => {
                res.status(200).json({
                    status : 200,
                    clients : data
                })
            }).catch(error => console.log(error));

        }, 
        /***
         * Recuperer un client
         */
         getClient: (req, res) => {
            
            let { id } = req.params;
            userModel.findOne({
                where : {
                    id : parseInt(id)
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
                        message : "Client non introuvable 🙇"
                    })
                }
            }).catch(error => 
                res.status(200).json({
                    status : 404,
                    message : "Impopossible de recuperer le client 🙇",
                    error : error
                })    
            );

        }, 



}

export default userController;