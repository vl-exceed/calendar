import dateSchema from '../schemas/userSchema';
import mongoose from 'mongoose'

const DateTime = mongoose.model('Date', dateSchema);

export default DateTime;