import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  login: String,
  password: String
}, {
  versionKey: false
});

export default userSchema;