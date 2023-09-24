const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// require('dotenv').config(); *******CAUSING 3 ERRORS**********

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';


const petRoutes = require('./controllers/pet');

const app = express();

Middleware
app.use(express.json());
app.use(cors());

Routes
app.use('/pets', petRoutes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// DB Connection
mongoose.connect(process.env.MONGO_URI, { UseNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT 

app.listen(PORT, console.log(`listening on port ${PORT}`))