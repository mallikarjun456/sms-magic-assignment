// models/ClientUsers.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Client = require('./Client');

const ClientUsers = sequelize.define('ClientUsers', {
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

ClientUsers.belongsTo(User);
ClientUsers.belongsTo(Client);

module.exports = ClientUsers;