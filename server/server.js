import express, { cookieParser } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport'
import LocalStrategy from 'passport-local'
import session from 'express-session'
import cors from 'cors';

import { path, port } from './serverConfig'
import userController from './src/api/controllers/userController'

const user = new userController();
const app = express();

mongoose.connect(`mongodb://${path}/calendar`, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => { console.log('connected') });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/////////////////////////////////

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.findById(id, (err, user) => {
    done(err, user);
  });
});


app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
    usernameField: 'login',
    passwordField: 'password'
},
 (login, password, done) => {
  user.findOne({ login: login }, (err, user) => {
    if (err) { return done(err) }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' })
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' })
    }
    return done(null, user);
  });
}
));

app.post('/api/auth/login', passport.authenticate('local'),
  function (req, res, next) {
    res.status(200).send({ data: 'ok' })
  });

app.get('/api/calendar/events', (req, res) => {
  res.status(200).send({data : [
    events = [
      { 
        id: 0,
        title: 'Dream day',
        text: 'Magic things everywhere',
        start: '',
        end: ''
      },
      {
        id: 1,
        title: 'Something else',
        text: 'bla bla bla',
        start: '',
        end: ''
      },
      {
        id: 2,
        title: 'Super day',
        text: 'My friend was born today',
        start: '',
        end: ''
      }
    ]
  ]})
})

app.post('/api/register', user.createUser)

app.listen(port, () => {
  console.log(`SERVER LISTENING ON ${port}`)
})