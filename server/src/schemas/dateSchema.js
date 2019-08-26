import mongoose from 'mongoose';

const dateSchema = new mongoose.Schema({
    title: String,
    description: String,
    start: Date,
    end: Date
});

export default dateSchema;