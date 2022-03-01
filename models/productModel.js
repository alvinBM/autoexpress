import Sequelize from 'sequelize';
import db from '../config/databases';

const product = db.define('products', {
    created: {
        type: Sequelize.DATE,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    solde: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    remise: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
}, {
    timestamps: false,
    freezeTableName: true
});

export default product;