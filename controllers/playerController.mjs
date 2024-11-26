import Player from '../models/Player.mjs';

export const createPlayer = async (req, res) => {
  const { playerName } = req.body;

  try {
    const existingPlayer = await Player.findOne({ playerName });
    if (existingPlayer) {
      return res.status(400).json({ message: 'Player name already exists' });
    }

    const newPlayer = await Player.create({ playerName, userId: req.user.id });
    res.status(201).json({ message: 'Player created successfully', player: newPlayer });
  } catch (error) {
    res.status(500).json({ message: 'Error creating player', error: error.message });
  }
};
