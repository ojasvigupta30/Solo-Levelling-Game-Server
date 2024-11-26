import mongoose from 'mongoose';

const dungeonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  monsters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Monster' }], // Link to Monster model
  loot: [{ type: String }], // List of loot items
  createdAt: { type: Date, default: Date.now },
  boss: {
    name: { type: String, required: true },
    health: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    lootDrop: [{ type: String }], // Loot for defeating the boss
  },
  
});

export default mongoose.model('Dungeon', dungeonSchema);
