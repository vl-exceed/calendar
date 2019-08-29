import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  login: String,
  password: String
}, {
  versionKey: false
});

userSchema.methods.validPassword = function(pass) {
  return (this.password === pass);
};

export default userSchema;