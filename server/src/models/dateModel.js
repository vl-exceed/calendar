import dateSchema from '../schemas/userSchema';

const DateTime = mongoose.model('Date', dateSchema);

export default DateTime;