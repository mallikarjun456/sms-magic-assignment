// routes/clients.js
const express = require('express');
const router = express.Router();
const authenticateRole = require('../middlewares/authMiddleware');
const ClientController = require('../controllers/ClientController');

// 2.3 Create some Client (Secured for ROLE_ADMIN only)
router.post('/clients', authenticateRole('ROLE_ADMIN'), ClientController.createClient);

// 2.4 Change any Client field
router.patch('/clients/:id', ClientController.changeClientField);

module.exports = router;