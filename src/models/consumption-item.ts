import * as mongoose from 'mongoose';

const ConsumptionItem = new mongoose.Schema({
    description: { type: String, required: true },
    active: {type: Boolean, required: true},
    price: { type: Number, required: true},
    createdAt: { type: Date, default: Date.now, required: true }
});

export default mongoose.model('consumptionItem', ConsumptionItem);