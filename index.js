const express = require('express');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // <== Enable CORS for all origins
app.use(express.json()); // Parses JSON body

// Sample TODOs
const todos = [
  { id: 1, title: "Buy groceries", description : "this is a desc of Buy groceries", completed: false },
  { id: 2, title: "Walk the dog", description : "this is a desc of Walk the dog", completed: true },
  { id: 3, title: "Read a book", description : "this is a desc of Read a book", completed: false },
  { id: 4, title: "Write some code",description : "this is a desc of Write some code ",  completed: true },
  { id: 5, title: "Clean the room", description : "this is a desc of Clean the room ", completed: false },
  { id: 6, title: "Clean the Hall", description : "this is a desc of Clean the hall", completed: false },
  { id: 7, title: "Clean the kitchen", description : "this is a desc of Clean the kitchen.", completed: false },
  { id: 8, title: "Clean the bed", description : "this is a desc of Clean the bed.", completed: false },
  { id: 9, title: "Clean the bike", description : "this is a desc of Clean the Bike", completed: false },
  { id: 10, title: "Clean the scooty",description : "this is a desc of Clean the scooty",  completed: false },
  { id: 11, title: "Clean the clothes",description : "this is a desc of Clean the clothes",  completed: false },
  { id: 12, title: "Clean the PG", description : "this is a desc of Clean the PG.", completed: false },
  { id: 13, title: "Study DSA", description : "life is sorted with this ", completed: false },
  { id: 14, title: "Study DBMS with SQL", description : "explore the concepts of a DBMS", completed: false },
  { id: 15, title: "Rivision of WEB-dev", description : "learn React.js", completed: false },
  { id: 16, title: "So ja mere bhai",description : "this is a desc of sleeping1",  completed: false },
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
