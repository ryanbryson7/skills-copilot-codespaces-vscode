// Create web server

// 1. Load modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// 2. Create web server
const app = express();

// 3. Setup middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// 4. Define routes
app.use('/api/v1', require('./routes/api'));

// 5. Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});