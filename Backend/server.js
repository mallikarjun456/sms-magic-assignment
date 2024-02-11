// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/users', (req, res) => {
  const users = [{ id: 1, username: 'user1' }, { id: 2, username: 'user2' }];
  res.json(users);
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log("Server is running on port" `${port}`);
});