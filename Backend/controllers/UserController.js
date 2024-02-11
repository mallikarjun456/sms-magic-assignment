// controllers/UserController.js
const User = require('../models/User');
const User = require("../models/User");
// 2.1 List app Users
const listUsers = async (req, res) => {
  try {
    const { username } = req.query;
    const filter = username ? { where: { username } } : {};
    const users = await User.findAll(filter);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// 2.2 Replace some User fields at once
const replaceUserFields = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await User.update(body, { where: { id } });
    res.json({ message: 'User fields updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// GET /user/profile/:email
const getUserProfile = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  listUsers,
  replaceUserFields,
  getUserProfile,
};