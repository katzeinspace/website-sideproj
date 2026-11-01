const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse JSON request bodies
app.use(express.json());

// basic test route
app.get('/api/hi', (req, res) => {
  res.json({ message: 'scientists reveal the hi' });
});

// start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});