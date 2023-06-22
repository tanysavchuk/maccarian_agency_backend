const { sequelize } = require("../db/mysql");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      require: true,
    },
    email: {
      type: DataTypes.STRING,
      require: true,
    },
  },
  {
    timestamps: true,
    createdAt: "created_at", // alias createdAt as created_date
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
  }
);

exports.User = User;
