import express, { router } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import userController from './src/api/controllers/userController'
const User = new userController();

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
app.use(cors());

app.post('/api/register', User.createUser)


app.listen(3001, () => {
    console.log('SERVER LISTENING ON 3001')
})