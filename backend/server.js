const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4200;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
});


const exerciseRouter = require('./routes/exercise');

app.use('/exercises', exerciseRouter);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

