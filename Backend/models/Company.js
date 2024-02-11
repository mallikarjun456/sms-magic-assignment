// models/Company.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Company = sequelize.define('Company', {
  // Existing company fields...
  // ...

  // Add the new field for employees
  employees: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  revenue: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
});

Company.hasMany(User, { as: 'users', foreignKey: 'companyId' });

module.exports = Company;