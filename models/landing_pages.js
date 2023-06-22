const { sequelize } = require("../db/mysql");
const { DataTypes } = require("sequelize");

const LandingPages = sequelize.define(
  "landingPages",
  {
    id: {
      type: DataTypes.STRING,
      require: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      require: true,
    },
    body1: {
      type: DataTypes.STRING,
      require: true,
    },
    body2: {
      type: DataTypes.STRING,
      require: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at", // alias createdAt as created_date
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    tableName: "landing_pages",
  }
);

exports.LandingPages = LandingPages;
