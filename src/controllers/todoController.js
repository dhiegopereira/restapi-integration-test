const knex = require('knex');
const config = require('../../config/knexfile');
const Todo = require('../models/todoModel');

const db = knex(config.development);

class TodoController {
  async getAllTodos(req, res) {
    try {
      const todosData = await db.select('*').from('todo');
      const todos = todosData.map(todoData => new Todo(
        todoData.id,
        todoData.title,
        todoData.description,
        todoData.completed,
        todoData.created_at,
        todoData.updated_at
      ));
      res.json(todos);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  }   

  async getTodoById(req, res) {
    try {
      const todoData = await db.select('*').from('todo').where('id', req.params.id).first();
      if (todoData) {
        const todo = new Todo(
          todoData.id,
          todoData.title,
          todoData.description,
          todoData.completed,
          todoData.created_at,
          todoData.updated_at
          );
          res.json(todo);
        } else {
          return null;
        }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }  

  async createTodo(req, res) {
    try {
      const [newTodoData] = await db.insert(req.body).from('todo').returning('*');
      const newTodo = new Todo(
        newTodoData.id,
        newTodoData.title,
        newTodoData.description,
        newTodoData.completed,
        newTodoData.created_at,
        newTodoData.updated_at
        );
        console.log(newTodoData);
        res.json(newTodo);
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }  
  
  async updateTodo(req, res) {
    try {
      const [updatedTodoData] = await db.update(req.body).from('todo').where('id', req.params.id).returning('*');
      if (updatedTodoData) {
      const updatedTodo = new Todo(
        updatedTodoData.id,
        updatedTodoData.title,
        updatedTodoData.description,
        updatedTodoData.completed,
        updatedTodoData.created_at,
        updatedTodoData.updated_at
        );
        res.json(updatedTodo);
      } else {
        return null;
      }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }
  
  async deleteTodo(req, res) {
    try {

      const [deletedTodoData] = await db.del().where('id', req.params.id).from('todo').returning('*');
      if (deletedTodoData) {
        const deletedTodo = new Todo(
          deletedTodoData.id,
          deletedTodoData.title,
          deletedTodoData.description,
          deletedTodoData.completed,
          deletedTodoData.created_at,
          deletedTodoData.updated_at
          );
          res.json(deletedTodo);
        } else {
          return null;
        }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  }  
}

module.exports = TodoController;
