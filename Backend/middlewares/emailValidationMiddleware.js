// middlewares/emailValidationMiddleware.js
const emailValidationMiddleware = (req, res, next) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { email } = req.params;
  
    if (!emailPattern.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
  
    next();
  };
  
  module.exports = emailValidationMiddleware;