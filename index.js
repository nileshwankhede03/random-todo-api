const express = require('express');
const app = express();
const port = 3000;

// Sample TODOs
const todos = [
  { id: 1, title: "Buy groceries", completed: false },
  { id: 2, title: "Walk the dog", completed: true },
  { id: 3, title: "Read a book", completed: false },
  { id: 4, title: "Write some code", completed: true },
  { id: 5, title: "Clean the room", completed: false },
];

// Utility to get random TODO
function getRandomTodo() {
  return todos[Math.floor(Math.random() * todos.length)];
}

// Route to return a random todo
app.get('/todos', (req, res) => {
  const randomTodo = getRandomTodo();
  res.json(randomTodo);
});

app.listen(port, () => {
  console.log(`Random TODO API listening at http://localhost:${port}`);
});
