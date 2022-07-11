import { Op } from "sequelize";
import formatDate from "date-format";
import bcrypt from "bcrypt";
import userModel from "../models/userModel";
import jwt from "jsonwebtoken";

const userController = {
  /**
   * Login user
   */
  login: async (req, res) => {
    let { identifiant, password } = req.body;

    let user = await userModel
      .findOne({
        where: {
          phone: identifiant
        }
      })
      .then()
      .catch((er) => {
        console.error(er);
        return res.status(200).json({
          status: 400,
          message: er
        });
      });
    //

    if (user) {
      //Camparaison de password avec bcrypt.campare
      let is_logged = await bcrypt.compare(password, user.password);

      if (is_logged) {
        /**Generation du Token avec la librarie jwt */
        const token = jwt.sign(
          {
            user_id: user.id,
            role_id: user.role
          },
          process.env.secret_token,
          {
            expiresIn: process.env.expire_token
          }
        );

        return res.status(200).json({
          status: 200,
          loged: true,
          token,
          user: {
            ...user.dataValues,
            password: ""
          }
        });
      }
    } else {
      return res.status(200).json({
        status: 400,
        message: "Login Mot de passe incorrect"
      });
    }

    res.status(200).json({
      status: 400,
      message: "impossible de connecter cet utilisateur"
    });
  },

  /**
   * Enregistrer user
   */
  register: async (req, res) => {
    let { name, lastname, email, phone, photo, password, role } = req.body;

    if (!name || !lastname || !email || !phone || !password) {
      return res.status(200).json({
        status: 400,
        message: "Veuillez remplir tous les champs obligatoire svp"
      });
    }

    password = await bcrypt.hash(password, 10);
    let created = formatDate("yyyy-MM-dd hh:mm:ss", new Date());

    let result = await userModel
      .create({ created, name, lastname, email, phone, photo, password, role })
      .then()
      .catch((er) => {
        res.status(200).json({
          status: 400,
          message: "Impossible d'enregistrer cette le client"
        });
      });

    if (result) {
      return res.status(200).json({
        status: 200,
        message: "Utilisateur créé avec succès",
        result
      });
    }
  },

  /***
   * Recuperer les clients
   */
  getClients: (req, res) => {
    userModel
      .findAll({
        where: {
          role: 2
        },
        order: [["id", "DESC"]]
      })
      .then((data) => {
        res.status(200).json({
          status: 200,
          clients: data
        });
      })
      .catch((er) => {
        res.status(200).json({
          status: 400,
          clients: null,
          message: "Impossible de recuperer les clients",
          error: er
        });
      });
  },
  /***
   * Recuperer un client
   */
  getClient: (req, res) => {
    let { id } = req.params;
    userModel
      .findOne({
        where: {
          id: parseInt(id),
          role: 2
        }
      })
      .then((data) => {
        if (data) {
          res.status(200).json({
            status: 200,
            artwork: data,
            data
          });
        } else {
          res.status(200).json({
            status: 400,
            message: "Client introuvable 🙇"
          });
        }
      })
      .catch((error) =>
        res.status(200).json({
          status: 404,
          message: "Impopossible de recuperer le client 🙇",
          error: error
        })
      );
  }
};

export default userController;
