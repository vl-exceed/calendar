import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import UserController from './src/routers/userRouter';
import DateController from './src/routers/dateRouter';

const app = express();
 
mongoose.connect('mongodb://localhost/calendar', {
    useNewUrlParser: true, 
    useCreateIndex: true
})
.then(() => {
    console.log('connected')
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('it works')
})

app.listen(3001, () => {
    console.log('SERVER LISTENING ON 3001')
})