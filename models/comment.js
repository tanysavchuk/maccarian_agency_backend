const { sequelize } = require("../db/mysql");
const { DataTypes } = require("sequelize");

const Comment = sequelize.define(
  "comments",
  {
    user_id: {
      type: DataTypes.STRING,
      require: true,
    },
    body: {
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

exports.Comment = Comment;
