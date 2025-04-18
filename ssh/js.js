const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API route example
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// All other routes return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port PORT`);
});