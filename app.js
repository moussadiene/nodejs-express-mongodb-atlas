const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const bodyParser = require('body-parser');

// middleware
app.use(cors())
app.use(bodyParser.json());
const clientsRoute = require('./router/clients');

app.use('/clients',clientsRoute);

// import Routes
app.get('/',(req,res) => {
    res.send('demarage');
})
// connexion
 mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true , useUnifiedTopology: true },
    () => console.log('connect to database test')
) 
// connext db mongoose
// port d'ecoute
app.listen(3000)