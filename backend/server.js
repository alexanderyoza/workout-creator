const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
//const port = process.env.PORT || 4200;
const port = 4200;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
    useNewUrlParser:true, useUnifiedTopology:true 
    },
    (err) => {
        err ? console.log(err) : console.log("connection success");
        if(err){
            console.log(err);
        }
    }
);
const connection = mongoose.connection;
console.log('Attempting to connect...');
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


const sportInfoRouter = require('./routes/sportInfo');
const groupRouter = require('./routes/group');

app.use('/sportinfo', sportInfoRouter);
app.use('/group', groupRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

