import Sequelize from 'sequelize';
import db from '../config/databases';

const optionModel = db.define('product_options', {
    created: {
        type: Sequelize.DATE,
        allowNull: false
    },
    option_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
}, {
    timestamps: false,
    freezeTableName: true
});


export default optionModel;