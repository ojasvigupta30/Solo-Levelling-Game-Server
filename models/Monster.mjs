import mongoose from 'mongoose';

const monsterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  health: { type: Number, default: 50 },
  attack: { type: Number, default: 10 },
  defense: { type: Number, default: 5 },
  lootDrop: [{ type: String }], // Loot items the monster drops
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Monster', monsterSchema);
