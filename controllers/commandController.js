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
  },

  /**
   * Recuperer une commande (Irenge)
   */
  getCommande: async (req, res) => {},

  /**Get commande by user */
  getCommandeByUser: async (req, res) => {},

  /**
   * createCommande (Krame)
   */
  createCommande: async (req, res) => {
    let { user_id, amount, panier } = req.body;

    //Create commande
    //if success, commande.id =>
    //Parcourir panier => createPanier

    panier.forEach(element => {
      createPanier(element, commande.id);
    });

    return res.status(200).json({
      status: 200,
      message: "Commande creee avec succes"
    });
  },

  createPanier: (panier, comanndeId) => {}
};

export default commandController;
