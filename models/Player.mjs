import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: Number,
        default: 1
    },
    xp: {
        type: Number,
        default: 0
    },
    stats: {
        health: {
            type: Number,
            default: 100
        },
        attack: {
            type: Number,
            default: 10
        },
        defense: {
            type: Number,
            default: 5
        },
    },
    inventory: [
        { type: String }
    ],
    skills: [{
        name: { type: String, required: true },
        cooldown: { type: Number, default: 0 }, // Turns before it can be reused
        effect: { type: String }, // Describe the effect (e.g., "heal", "double attack")
}],
});

export default mongoose.model('Player', playerSchema);
