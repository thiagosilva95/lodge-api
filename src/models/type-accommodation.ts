
import * as mongoose from 'mongoose';


const TypeAccommodation = new mongoose.Schema({
    description: { type: String, required: true },
    active: {type: Boolean, required: true},
    dailyValue: { type: Number, required: true},
    createdAt: { type: Date, default: Date.now, required: true }
});

export default mongoose.model('typeAccommodation', TypeAccommodation);