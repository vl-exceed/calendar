import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: String,
  username: {
    type: String,
    unique: true,
  },
  password: String, 
  email: String
});

export default userSchema;