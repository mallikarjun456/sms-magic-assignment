// controllers/CustomQueryController.js
const { Op } = require('sequelize');
const Company = require('../models/Company');
const User = require('../models/User');
const Client = require('../models/Client');

// 3.1 Search for Companies by employees range.
const searchCompaniesByEmployeesRange = async (req, res) => {
  try {
    const { minEmployees, maxEmployees } = req.query;
    const companies = await Company.findAll({
      where: {
        employees: {
          [Op.between]: [minEmployees, maxEmployees],
        },
      },
    });
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// 3.2 Search for Clients by User or Name
const searchClients = async (req, res) => {
  try {
    const { type, value } = req.query;
    let clients;

    if (type === 'user') {
      clients = await Client.findAll({
        include: [
          {
            model: User,
            where: {
              username: value,
            },
          },
        ],
      });
    } else if (type === 'name') {
      clients = await Client.findAll({
        where: {
          name: {
            [Op.like]: `%${value}%`,
          },
        },
      });
    }

    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// 3.3 Get a list of companies with max revenue in their industry
const companiesWithMaxRevenueInIndustry = async (req, res) => {
  try {
    const rawSQLQuery = `
      SELECT c.* FROM Companies c
      WHERE c.revenue = (
        SELECT MAX(c2.revenue) FROM Companies c2
        WHERE c2.industry = c.industry
      );
    `;
    const companies = await sequelize.query(rawSQLQuery, {
      type: sequelize.QueryTypes.SELECT,
    });

    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  searchCompaniesByEmployeesRange,
  searchClients,
  companiesWithMaxRevenueInIndustry,
};