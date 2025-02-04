// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create comments array
const comments = [];

// Create GET route
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Create POST route
app.post('/comments', (req, res) => {
  comments.push(req.body);
  res.status(201).send(req.body);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});