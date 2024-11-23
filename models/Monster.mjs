import mongoose from 'mongoose';

const monsterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    health: {
        type: Number,
        default: 50
    },
    attack: {
        type: Number,
        default: 8
    },
    lootDrop: [
        { type: String }
    ],
});

export default mongoose.model('Monster', monsterSchema);
