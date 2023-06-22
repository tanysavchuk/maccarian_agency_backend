const { sequelize } = require("../db/mysql");
const { DataTypes } = require("sequelize");

const Possibilities = sequelize.define(
  "possibilities",
  {
    id: {
      type: DataTypes.NUMBER,
      primaryKey: true,
    },
    icon: {
      type: DataTypes.STRING,
      require: true,
    },
    header: {
      type: DataTypes.STRING,
      require: true,
    },
    body: {
      type: DataTypes.STRING,
      require: true,
    },
  },
  {
    tableName: "possibilities", // specify the custom table name
    timestamps: false,
    // other options
  }
);
exports.Possibilities = Possibilities;
