import { Op } from "sequelize";
import commandModel from "../models/commandModel";
import panierModel from "../models/panierModel";
import UserModel from "../models/userModel";
import { IcHttpStatusCode } from "../shared/constants/HttpStatus";
import serverResponse from "../shared/interceptors/serverResponse";

const commandController = {
  createCommandV2: async (req, res) => {
    try {
      const { amount, status, panier, user_id } = req.body;
      const u = await UserModel.findOne({
        where: { id: user_id }
      });
      if (!u) {
        return res.status(400).json({
          errors: {
            message: "Something went wrong",
            error: "no user found"
          }
        });
      }

      const command = await commandModel.create({
        amount,
        status,
        user_id,
        panier: "",
        created: new Date()
      });
      if (command) {
        panier.map(async (item) => {
          await panierModel.create({
            user_id,
            commande_id: command.id,
            price: item.price,
            quantity: item.quantity,
            product_id: item.product_id,
            options: item.options,
            created: new Date()
          });
        });
      }
      return res.status(200).json({
        results: {
          success: true,
          message: "Commande et panier crées",
          command
        }
      });
    } catch (error) {
      return res.status(400).json({
        errors: {
          message: "Something went wrong",
          error: error
        }
      });
    }
  },

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
        commands.update({ status: parseInt(status) }).then(function () {
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
    //Recuperation des donnees de la requete
    const { amount, status, panier, user_id } = req.body;

    if (user_id == null || amount == null || status == null) {
      return res.status(400).json({ error: "Completez tous les champs SVP!" });
    }
    //Verification de l'existence de ce User
    await userModel
      .findOne({
        // attributes: ["id"],
        where: { id: user_id }
      })
      .then(function (user) {
        //Message de retour effacé car posant des problèmes
      })
      .catch(function (err) {
        return res
          .status(500)
          .json({ error: "Cet utilisateur est introuvable, verifier lId" });
      });
    //
    return res.status(200).json({
      message: "Commandes crees",
      res
    });

    let creation = await commandModel
      .create({
        user_id: user_id,
        amount: amount,
        status: status,
        created: new Date()
      })
      .then()
      .catch((er) => {
        res.status(200).json({
          status: 400,
          message: "Impossible de prendre cette commande, erreur inconnue"
        });
      });

    function createPanier(panier, commandeId) {
      var user_id2 = user_id;
      var commande_id = commandeId;
      var quantity = panier.quantity;
      var price = panier.price;
      var options = panier.options;
      var product_id = panier.product_id;

      if (price == null || product_id == null) {
        return res
          .status(400)
          .json({ error: "Completez surtout le prix et lID des produits !" });
      }

      productModel
        .findOne({
          attributes: ["id"],
          where: { id: product_id }
        })
        .then()
        .catch(function (err) {
          //Message de retour effacé car posant des problèmes
        });

      panierModel
        .create({
          user_id: user_id2,
          commande_id: commande_id,
          quantity: quantity,
          price: price,
          options: options,
          product_id: product_id,
          created: new Date()
        })
        .then()
        .catch((er) => {
          res.status(200).json({
            status: 400,
            message: "Un produit mentionne est invalide, erreur inconnue"
          });
        });
    }

    if (creation) {
      /*  panier.forEach(function (Monpanier) {
        createPanier(Monpanier, commande_id=1);
      }); */
    }
  }
};

export default commandController;
