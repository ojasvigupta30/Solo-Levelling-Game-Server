import Dungeon from '../models/Dungeon.mjs';
import Monster from '../models/Monster.mjs';

export const getDungeons = async (reqs, resp) => {

    try {
        const dungeons = await Dungeon.find().populate('monsters');
        resp.status(200).json(dungeons);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
};

export const createDungeon = async (reqs, resp) => {
    
    const { name, difficulty, monsters, loot } = reqs.body;
    try {
        const newDungeon = await Dungeon.create({ name, difficulty, monsters, loot });
        resp.status(201).json(newDungeon);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
};
