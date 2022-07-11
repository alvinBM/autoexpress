import { Op } from "sequelize";
import panierModel from "../models/panierModel";

const panierController = {
  /**
   * test function
   */
  getPaniers: async (req, res) => {
    return res.status(200).json({
      status: 200,
      success: true,
      message: "test works Successfully"
    });
  }
};
export default panierController;
