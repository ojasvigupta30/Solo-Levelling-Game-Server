import Player from '../models/Player.mjs';

// Create or Update Player
export const createOrUpdatePlayer = async (req, res) => {
  const { username, inventory, skills } = req.body;

  try {
    // Check if the player already exists
    let player = await Player.findOne({ username });

    if (player) {
      // Update inventory or skills if provided
      if (inventory) player.inventory = [...player.inventory, ...inventory];
      if (skills) player.skills = [...player.skills, ...skills];
      await player.save();
      return res.status(200).json({ message: 'Player updated successfully', player });
    }

    // Create a new player
    player = await Player.create({ username });
    res.status(201).json({ message: 'Player created successfully', player });
  } catch (error) {
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
