'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable("laptop", {
            //  define ID Column and Type
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            //  define Name Column and Type
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            //  define Price Column and Type
            price: {
                type: Sequelize.TEXT,
                allowNull: false
            },
            //  define Company Column and Type
            company: {
                type: Sequelize.STRING,
                allowNull: false
            },
            //  define Description Column and Type
            description: {
                type: Sequelize.TEXT
            },
            //  define Created At Column and Type
            createAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            //  define Updated At Column and Type
            updateAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable("laptop")
    }
};