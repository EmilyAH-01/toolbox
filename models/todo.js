const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  content: { type: String, required: true },
  completed: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;