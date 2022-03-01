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

  }
};
export default commandController;
