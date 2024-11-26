import Player from '../models/Player.mjs';
import Monster from '../models/Monster.mjs';

// Battle with a monster
export const battleMonster = async (req, res) => {
  const { playerName, monsterId } = req.body;

  try {
    const player = await Player.findOne({ username: playerName });
    if (!player) return res.status(404).json({ message: 'Player not found' });

    const monster = await Monster.findById(monsterId);
    if (!monster) return res.status(404).json({ message: 'Monster not found' });

    let playerHealth = player.stats.health;
    let monsterHealth = monster.health;

    // Simulate battle
    while (playerHealth > 0 && monsterHealth > 0) {
      // Player attacks monster
      monsterHealth -= Math.max(player.stats.attack - monster.defense, 1);

      // Monster attacks player
      if (monsterHealth > 0) {
        playerHealth -= Math.max(monster.attack - player.stats.defense, 1);
      }
    }

    // Determine result
    if (playerHealth <= 0) {
      return res.status(200).json({ message: 'You were defeated by the monster.' });
    }

    // Player wins: Gain XP and loot
    const xpGained = 20; // Example XP gain
    player.xp += xpGained;

    // Level up logic
    while (player.xp >= 100) {
      player.level += 1;
      player.xp -= 100;
      player.stats.health += 10;
      player.stats.attack += 5;
      player.stats.defense += 3;
    }

    await player.save();

    res.status(200).json({
      message: 'You defeated the monster!',
      player,
      loot: monster.lootDrop,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error battling monster', error: error.message });
  }
};
