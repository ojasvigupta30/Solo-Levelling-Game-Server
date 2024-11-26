import Player from '../models/Player.mjs';

// Create or Update Player
export const createOrUpdatePlayer = async (req, res) => {
    const { username } = req.body;
  
    console.log('Request to create/update player:', req.user, req.body);
  
    try {
      let player = await Player.findOne({ username: req.user.username });
  
      if (player) {
        player.username = username; // Update username if needed
        await player.save();
        return res.status(200).json({ message: 'Player updated successfully', player });
      }
  
      player = await Player.create({ username: req.user.username });
      res.status(201).json({ message: 'Player created successfully', player });
    } catch (error) {
      console.error('Error creating/updating player:', error.message);
      res.status(500).json({ message: 'Error creating/updating player', error: error.message });
    }
  };
  

// Fetch Player Details
export const getPlayer = async (req, res) => {
  const { username } = req.params;

  try {
    const player = await Player.findOne({ username });
    if (!player) return res.status(404).json({ message: 'Player not found' });

    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching player', error: error.message });
  }
};

// Add XP and Level Up Player
export const addXP = async (req, res) => {
  const { username } = req.params;
  const { xpGained } = req.body;

  try {
    const player = await Player.findOne({ username });
    if (!player) return res.status(404).json({ message: 'Player not found' });

    player.xp += xpGained;

    // Level up logic: Assume 100 XP per level
    while (player.xp >= 100) {
      player.level += 1;
      player.xp -= 100;
      player.stats.health += 10;
      player.stats.attack += 5;
      player.stats.defense += 3;
    }

    await player.save();
    res.status(200).json({ message: 'XP added successfully', player });
  } catch (error) {
    res.status(500).json({ message: 'Error adding XP', error: error.message });
  }
};
