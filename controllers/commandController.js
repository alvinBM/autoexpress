import { Op } from "sequelize";
import commandModel from "../models/commandModel";

const commandController = {
  /**
  * Test function
 */
  getCommands: async (req, res) => {
    return res.status(200).json({
      status: 200,
      success: true,
      message: "test works Successfully"
    });
  }
};
export default commandController;
