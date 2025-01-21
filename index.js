const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');











const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the "public" folder

// Handle form submission
app.post('/save', (req, res) => {
  const { name, email } = req.body;

  // Insert into the database
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Error saving data.');
    }
    console.log('Data inserted successfully!');
    res.send('Data saved successfully!');
  });
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
