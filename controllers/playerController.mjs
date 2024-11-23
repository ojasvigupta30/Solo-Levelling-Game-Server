import Player from '../models/Player.mjs';

export const createPlayer = async (reqs, resp) => {
   
    const { username } = reqs.body;
    try {
        const newPlayer = await Player.create({ username });
        resp.status(201).json(newPlayer);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
};

export const getPlayer = async (reqs, resp) => {
    
    const { id } = reqs.params;
    try {
        const player = await Player.findById(id);
        if (!player) return resp.status(404).json({ message: 'Player not found' });
        resp.status(200).json(player);
    } catch (error) {
        resp.status(500).json({ error: error.message });
    }
};
