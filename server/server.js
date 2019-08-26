import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
 
mongoose.connect('mongodb://localhost/calendar', {useNewUrlParser: true});
bodyParser.json();

app.get('/', (req, res) => {
    res.send('it works')
})

app.listen(3001, () => {
    console.log('SERVER LISTENING ON 3001')
})