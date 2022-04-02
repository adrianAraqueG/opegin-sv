/** ----------------------------------------------------------------/
 *  -------------------------- Imports -----------------------------/
 *  ---------------------------------------------------------------*/ 

    import db from '../config/db.js';

    import Sequelize from 'sequelize';


/** ----------------------------------------------------------------/
 *  ------------------------- Model: Users -------------------------/
 *  ---------------------------------------------------------------*/ 

    const usersTable = db.define('users', {
        username: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        shortname: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        cc: {
            type: Sequelize.INTEGER
        },
        created_at: {
            type: Sequelize.DATE
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: true
        },
    });

export default usersTable;