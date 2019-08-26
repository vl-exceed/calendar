import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import UserConsroller from './src/constrollers/userConstroller';
import DateController from './src/constrollers/dateController';

const app = express();
 
mongoose.connect('mongodb://localhost/calendar', {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('it works')
})

app.listen(3001, () => {
    console.log('SERVER LISTENING ON 3001')
})