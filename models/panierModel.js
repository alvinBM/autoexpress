import Sequelize from "sequelize";
import db from "../config/databases";

const panier = db.define(
  "paniers",
  {
    created: {
      type: Sequelize.DATE,
      allowNull: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    command_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    options: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

export default panier;
