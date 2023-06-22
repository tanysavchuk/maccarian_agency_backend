const { sequelize } = require("../db/mysql");
const { DataTypes } = require("sequelize");

const CardsCustomize = sequelize.define(
  "CardCustomize",
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    icon: {
      type: DataTypes.STRING,
      require: true,
    },

    title: {
      type: DataTypes.STRING,
      require: true,
    },
    text: {
      type: DataTypes.STRING,
      require: true,
    },
  },
  {
    tableName: "cards_customize", // specify the custom table name
    timestamps: false,
    // other options
  }
);

exports.CardsCustomize = CardsCustomize;
