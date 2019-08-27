import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  login: String,
  password: String
});

export default userSchema;