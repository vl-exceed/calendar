import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import passport from 'passport'
import session from 'express-session'
import LocalStrategy from 'passport-local'
import cors from 'cors';

import { path, port } from './serverConfig'
import userController from './src/api/controllers/userController'

const user = new userController();

console.log(userController.findById, 'userController.findById')
const app = express();

mongoose.connect(`mongodb://${path}/calendar`, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => { console.log('connected') });

// app.use(passport.initialize())
// app.use(passport.session())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/api/register', user.createUser)

/////////////////////////////////

passport.serializeUser(function (user, done) { //In serialize user you decide what to store in the session. Here I'm storing the user id only.
  done(null, user.id);
});

passport.deserializeUser(function (id, done) { //Here you retrieve all the info of the user from the session storage using the user id stored in the session earlier using serialize user.
  db.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy( {
    usernameField: 'login',
    passwordField: 'password'
},
function (login, password, done) {
  user.findOne({ login: login }, function (err, user) {
    console.log('22222222222', err, user)
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

app.use(session({ secret: 'super secret' })); //to make passport remember the user on other pages too.(Read about session store. I used express-sessions.)
app.use(passport.initialize());
app.use(passport.session());

app.post('/api/auth/login', passport.authenticate('local'),
  function (req, res, next) {
    const data = req.body
    console.log(data)
  });

// app.post('/api/auth/login', (req, res) => {
//     const data = req.body

// })

/////////////////////////////////


app.listen(port, () => {
  console.log(`SERVER LISTENING ON ${port}`)
})