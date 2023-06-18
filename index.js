require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');


// Database connection + indicator
mongoose.connect('mongodb://127.0.0.1:27017');
mongoose.connection.on('connected', () => console.log('Connected to database'));
mongoose.connection.on('error', (error) => console.log(error));

app.use(express.json());
const chickenRouter = require('./routes/chicken.js');
app.use('/chicken', chickenRouter);

// Server launch + indicator
app.listen(3000, () => console.log('Server started'));