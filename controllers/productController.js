import { Op } from "sequelize";
import formatDate from "date-format";
import userModel from "../models/productModel";
import product from "../models/productModel";
import e from "cors";

const productController = {
  /**
   * Ajouter un produit
   */

  addProduit: async (req, res) => {
    let { name, description, price, quantity, category, solde, remise } =
      req.body;

    if (!name || !description || !price || !quantity || !category) {
      return res.status(200).json({
        status: 400,
        message: "Veuillez remplir tous les champs obligatoire svp",
      });
    }
    try {
      let created = formatDate("yyyy-MM-dd hh:mm:ss", new Date());
      let result = await product.create({
        created,
        name,
        description,
        price,
        quantity,
        category,
        solde,
        remise,
      });

      if (result) {
        return res.status(201).json({
          status: 201,
          message: "Produit créé avec succès",
          result,
        });
      }
    } catch (error) {
      return res.status(400).json({
        status: 400,
        message: error.message,
        result: null,
      });
    }
  },
  /***
   * Recuperer les produits
   */
  getProduits: (req, res) => {
    product
      .findAll({
        order: [["id", "DESC"]],
      })
      .then((data) => {
        res.status(200).json({
          status: 200,
          produits: data,
        });
      })
      .catch((er) => {
        res.status(200).json({
          status: 400,
          produits: null,
          message: "Impossible de recuperer les produits",
          error: er,
        });
      });
  },

  /**
   * Recuprer un cproduit (victore)
   */

  getProduit: (req, res) => {
    let { id } = req.params;
    product
      .findOne({
        where: {
          id: parseInt(id),
        },
      })
      .then((data) => {
        if (data) {
          res.status(200).json({
            status: 200,
            product: data,
          });
        } else {
          res.status(200).json({
            status: 400,
            message: "Produit introuvable",
          });
        }
      })
      .catch((error) =>
        res.status(200).json({
          status: 404,
          message: "impossible de recuperer le produit",
          error: error,
        })
      );
  },

  /**
   * Recuprer tous les produits en solde (victore)
   */

  getProduitsSoldes: (req, res) => {
    product
      .findAll({
        where: {
          solde: 1,
        },
        order: [["id", "DESC"]],
      })
      .then((data) => {
        if (data) {
          res.status(200).json({
            status: 200,
            product: data,
          });
        } else {
          res.status(200).json({
            status: 400,
            message: "Produits soldés introuvables",
          });
        }
      })
      .catch((error) =>
        res.status(200).json({
          status: 404,
          message: "impossible de recuperer les produits soldés ",
          // error: error
        })
      );
  },

  /**
   * Recuprer tous les produits by categori Id passer en param en solde (dieumerci)
   */
  getProduitsByCategorie: (req, res) => {
    let { id } = req.params;
    product
      .findAll({
        where: {
          category: parseInt(id),
        },
      })
      .then((data) => {
        if (data) {
          res.status(200).json({
            status: 200,
            product: data,
          });
        } else {
          res.status(200).json({
            status: 400,
            message: "Produit de cette categorie introuvable",
          });
        }
      })
      .catch((error) => {
        res.status(200).json({
          status: 404,
          message: "impossible de recuperer le produit",
          error: error,
        });
      });
  },
};

export default productController;
