const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Register a new user
router.post(
  '/register',
  body('username').notEmpty().withMessage('Username is required'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  register
);

// Login
router.post(
  '/login',
  body('username').notEmpty(),
  body('password').notEmpty(),
  login
);

module.exports = router;
