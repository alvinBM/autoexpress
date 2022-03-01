import { Op } from "sequelize";
import commandModel from "../models/commandModel";
import panierModel from "../models/panierModel";
import { IcHttpStatusCode } from "../shared/constants/HttpStatus";
import serverResponse from "../shared/interceptors/serverResponse";

const commandController = {
  getCommands: async (req, res) => {
    try {
      let commands = await commandModel.findAll({ include: [panierModel] });
      return serverResponse(
        IcHttpStatusCode.OK,
        "test works Successfully",
        { success: true, commands },
        res
      );
    } catch (error) {
      return serverResponse(
        IcHttpStatusCode.BAD_REQUEST,
        error.message,
        { success: true },
        res
      );
    }
  },
  getCommandByStatus: async (req, res) => {
    try {
      let commands = await commandModel.findOne({
        where: {
          status: req.params.status
        },
        include: [panierModel]
      });

      return serverResponse(
        IcHttpStatusCode.OK,
        "req passed Successfully",
        { success: true, commands },
        res
      );
    } catch (error) {
      return serverResponse(
        IcHttpStatusCode.BAD_REQUEST,
        error.message,
        null,
        res
      );
    }
  }
};

export default commandController;
