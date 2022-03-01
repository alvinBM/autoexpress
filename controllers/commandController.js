import { Op } from "sequelize";
import commandModel from "../models/commandModel";
import panierModel from "../models/panierModel";

const commandController = {
  /**
    * Test get all commande
  */
  getCommands: async (req, res) => {

    let commandes = await commandModel.findAll({include: [panierModel]})

    return res.status(200).json({
      status: 200,
      success: true,
      message: "test works Successfully",
      commandes
    });

  },

  /**
   * Recuperer une commande (Irenge)
   */
  getCommande : async (req, res) => {

  },

  /**Get commande by user */
  getCommandeByUser : async (req, res) => {

  },

  /**
   * createCommande (Krame)
   */
  createCommande : async (req, res) => {

    let {user_id, amount, panier} = req.body;

    //Create commande
    //if success, commande.id => 
    //Parcourir panier => createPanier


    panier.forEach(element => {
      createPanier(element, commande.id)
    });

    return res.status(200).json({
      status: 200,
      message : "Commande creee avec succes"
    });


  },

  createPanier : (panier, comanndeId) => {

  }

};
export default commandController;
