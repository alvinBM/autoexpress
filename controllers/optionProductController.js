import { Op } from 'sequelize';
import formatDate from 'date-format';
import optionModel from "../models/optionModel";
import jwt from 'jsonwebtoken';


const optionProductController = {

    /**Creer une option */
    creerOption : async (req, res) => {
        return res.status(200).json({
            status: 200,
            message: "Create option"
        });
    },


    /**
     * Recuprrer tous les options
     */
    getOptions : async (req, res) => {
        return res.status(200).json({
            status: 200,
            message: "get options"
        });
    },

    /**
     * Recuprrer tous les options
     */
     getOption : async (req, res) => {
        return res.status(200).json({
            status: 200,
            message: "get option"
        });
    },



}

export default optionProductController;