import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  cardId: { type: String, required: true },
  cardName: { type: String, required: true },
  carddata: { type: String, required: true },
});

export default mongoose.models.Card || mongoose.model('Card', cardSchema);