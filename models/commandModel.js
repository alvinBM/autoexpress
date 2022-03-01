import Sequelize from "sequelize";
import db from "../config/databases";
import panier from "./panierModel";

const command = db.define(
  "commande",
  {
    created: {
      type: Sequelize.DATE,
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

command.hasMany(panier, {foreignKey: 'commande_id'})

export default command;
