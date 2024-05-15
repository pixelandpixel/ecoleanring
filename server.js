// server.js

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Mock admin user (replace with database later)
const admin = {
  username: 'admin',
  password: '$2a$10$LzZ3ef9lOiE.7cNrJGzZuOE/9/HB2hmAxlXzrYy9Xt9gg5QHw5HTO', // hashed password: "password123"
};

// Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Verify username and password
  if (username !== admin.username || !bcrypt.compareSync(password, admin.password)) {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }

  // Generate JWT token
  const token = jwt.sign({ username: admin.username }, 'secret', { expiresIn: '1h' });

  res.status(200).json({ token });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
