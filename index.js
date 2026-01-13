const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve static HTML
app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
