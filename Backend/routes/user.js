// routes/users.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const UserController = require('../controllers/UserController')

//  List app Users
router.get('/users', UserController.listUsers);

//  Replace some User fields at once
router.put('/users/:id', UserController.replaceUserFields);
router.get('/user/profile/:email', emailValidationMiddleware, UserController.getUserProfile);

module.exports = router;