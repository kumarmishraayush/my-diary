const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors');
var app = express();
connectToMongo();


const port = 3000;

// Available Routes
app.use(cors());
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/diary', require('./routes/diary'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })