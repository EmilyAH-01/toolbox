const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Routes
app.use(routes);

// Connect to database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/toolbox',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the server
app.listen(PORT, function() {
  console.log('Server now listening on PORT' + PORT);
});


