const sequelize = require('../sequelize');

const User = require('./user');
const Task = require('./task');

module.exports = {
  sequelize,
  User,
  Task,
};