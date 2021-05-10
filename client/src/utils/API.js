/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  getTodos: function() {
    return axios.get('/api/todo');
  },
  deleteTodo: function(id) {
    return axios.delete('/api/todo/' + id);
  },
  saveTodo: function(data) {
    return axios.post('/api/todo', data);
  },
  updateTodo: function(id, data) {
    return axios.put('/api/todo/' + id, data);
  }
};