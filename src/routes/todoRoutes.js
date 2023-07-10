const express = require('express');
const TodoController = require('../controllers/todoController');

const router = express.Router();
const todoController = new TodoController();

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);
router.put('/:id', todoController.updateTodo);

module.exports = router;
