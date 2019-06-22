import * as mongoose from 'mongoose';

const Guest = new mongoose.Schema({
    name: { type: String, required: true },
    genere: { type: String, required: true },
    cpf: { type: String, required: true },
    birthDate: { type: Date, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    occupation: { type: String, required: true },
    address: { type: String, required: true },
    observation: { type: String, required: true },
    active: {type: Boolean, required: true},
    createdAt: { type: Date, default: Date.now, required: true }
});

export default mongoose.model('guest', Guest);