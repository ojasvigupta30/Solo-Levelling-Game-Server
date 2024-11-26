import mongoose from 'mongoose';

const dungeonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  monsters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Monster' }], // Link to Monster model
  loot: [{ type: String }], // List of loot items
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Dungeon', dungeonSchema);
