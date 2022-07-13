import { Op } from "sequelize";
import panierModel from "../models/panierModel";
import commandModel from "../models/commandModel";

const panierController = {
  /**
   * test function
   */
  getPaniers: async (req, res) => {
    const paniers = await panierModel.findAll({ order: [["id", "DESC"]] });
    return res.status(200).json({
      results: {
        message: "Successfully",
        success: true,
        data: paniers
      }
    });
  },
  getPaniersByCommand: async (req, res) => {
    const paniers = await panierModel.findAll({
      where: {
        commande_id: parseInt(req.params.idCommand)
      },
      order: [["id", "DESC"]]
    });
    return res.status(200).json({
      results: {
        message: "Successfully",
        success: true,
        data: paniers
      }
    });
  }
};
export default panierController;
