// models/Client.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Company = require('./Company');

const Client = sequelize.define('Client', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
});

Client.belongsTo(User);
Client.belongsTo(Company);

module.exports = Client;