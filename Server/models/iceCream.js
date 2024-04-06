module.exports = (sequelize, DataTypes) => {
    const iceCream = sequelize.define("iceCream", {
        flavor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return iceCream
}