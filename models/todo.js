const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = newSchema({
  content: { type: String, required: true },
  completed: { type: Boolean, required: true },
  date: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;