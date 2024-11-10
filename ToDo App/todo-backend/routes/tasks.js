const express = require('express');
const { body } = require('express-validator');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all tasks for a user
router.get('/', authMiddleware, getTasks);

// Add a new task
router.post(
  '/',
  authMiddleware,
  body('text').notEmpty().withMessage('Task text is required'),
  addTask
);

// Update an existing task
router.put(
  '/:taskId',
  authMiddleware,
  body('text').optional().notEmpty(),
  updateTask
);

// Delete a task
router.delete('/:taskId', authMiddleware, deleteTask);

module.exports = router;
