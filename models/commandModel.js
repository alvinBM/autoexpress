import Sequelize from "sequelize";
import db from "../config/databases";

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

export default command;
