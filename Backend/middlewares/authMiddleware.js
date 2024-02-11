// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authenticateRole = (requiredRole) => async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your-secret-key'); 

    const user = await User.findOne({
      where: {
        id: decoded.id,
      },
    });

    if (!user || user.role !== requiredRole) {
      return res.status(403).json({ error: 'Access forbidden' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Authentication failed' });
  }
};

module.exports = authenticateRole;