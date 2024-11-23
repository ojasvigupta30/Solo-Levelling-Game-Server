import mongoose from 'mongoose';

const dungeonSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        enum: ['Easy', 'Medium', 'Hard'],
        required: true
    },
    monsters: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Monster' }
    ],
    loot: [
        { type: String }
    ],
});

export default mongoose.model('Dungeon', dungeonSchema);
