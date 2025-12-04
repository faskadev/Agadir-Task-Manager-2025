const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Task = sequelize.define("Task", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  status: { type: DataTypes.ENUM("pending","done"), defaultValue: "pending" },
  due_date: { type: DataTypes.DATE, allowNull: true }
}, {
  tableName: "tasks",
  timestamps: true,
  createdAt: "created_at",
  updatedAt: false
});

// Association
Task.belongsTo(User, { foreignKey: "user_id" });
User.hasMany(Task, { foreignKey: "user_id" });

module.exports = Task;
