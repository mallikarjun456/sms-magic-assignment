// routes/customQueries.js
const express = require('express');
const router = express.Router();
const CustomQueryController = require('../controllers/CustomQueryController');

// 3.1 Search for Companies by employees range.
router.get('/companiesByEmployeesRange', CustomQueryController.searchCompaniesByEmployeesRange);

// 3.2 Search for Clients by User or Name
router.get('/searchClients', CustomQueryController.searchClients);

// 3.3 Get a list of companies with max revenue in their industry
router.get('/companiesWithMaxRevenue', CustomQueryController.companiesWithMaxRevenueInIndustry);

module.exports = router;