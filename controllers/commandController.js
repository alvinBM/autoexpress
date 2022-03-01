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
  },

  updateStatusCommand: async (req, res) => {
    try {
      const { status } = req.body;
      const commands = await commandModel.findOne({
        where: {
          id: req.params.id
        },
        include: [panierModel]
      });
      if (commands) {
        commands.update({ status: parseInt(status) }).then(function() {
          return serverResponse(
            IcHttpStatusCode.OK,
            "req passed Successfully",
            { success: true, commands },
            res
          );
        });
      }
    } catch (error) {
      return serverResponse(IcHttpStatusCode.BAD_REQUEST, error, null, res);
    }
  }
};

export default commandController;

/**
 

  try {
      const { id } = req.params;
      const { status } = req.body;
      commandModel.findOne({ where: { id } }).on("success", function(command) {
        if (command) {
          commandModel.update({ status }).success(function() {
            return serverResponse(
              IcHttpStatusCode.OK,
              "req passed Successfully",
              { success: true, command },
              res
            );
          });
        }
      });
    } catch (error) {
      return serverResponse(IcHttpStatusCode.BAD_REQUEST, error, null, res);
    }
 */
