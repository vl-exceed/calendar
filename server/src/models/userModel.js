import userSchema from '../schemas/userSchema';

const User = mongoose.model('User', userSchema);

export default User;