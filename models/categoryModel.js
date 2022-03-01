import Sequelize from 'sequelize';
import db from '../config/databases';

const category = db.define('category', {
    created: {
        type: Sequelize.DATE,
        allowNull: false
    },
    libelle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    
}, {
    timestamps: false,
    freezeTableName: true
});


export default category;