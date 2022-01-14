module.exports = (sequelize, DataTypes) => {
    const Laptop = sequelize.define("Laptop", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        //  define Name Column and Type
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //  define Price Column and Type
        price: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        //  define Company Column and Type
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //  define Description Column and Type
        description: {
            type: DataTypes.TEXT
        },
        //  define Created At Column and Type
        createAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        //  define Updated At Column and Type
        updateAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        // Represent Table Name in MySQL
        tableName: "laptop"
    })
    return Laptop
}