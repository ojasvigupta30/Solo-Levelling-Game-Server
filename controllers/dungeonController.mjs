import Dungeon from '../models/Dungeon.mjs';
import Monster from '../models/Monster.mjs';
import Player from '../models/Player.mjs';


// Create a dungeon
export const createDungeon = async (req, res) => {
  const { name, difficulty, monsters, loot } = req.body;

  try {
    const newDungeon = await Dungeon.create({ name, difficulty, monsters, loot });
    res.status(201).json({ message: 'Dungeon created successfully', dungeon: newDungeon });
  } catch (error) {
    res.status(500).json({ message: 'Error creating dungeon', error: error.message });
  }
};

// Get all dungeons
export const getDungeons = async (req, res) => {
  try {
    const dungeons = await Dungeon.find().populate('monsters'); // Populate monster details
    res.status(200).json(dungeons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dungeons', error: error.message });
  }
};

// Get dungeon by ID
export const getDungeonById = async (req, res) => {
  const { id } = req.params;

  try {
    const dungeon = await Dungeon.findById(id).populate('monsters');
    if (!dungeon) return res.status(404).json({ message: 'Dungeon not found' });

    res.status(200).json(dungeon);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dungeon', error: error.message });
  }
};


// Explore a Dungeon
export const exploreDungeon = async (req, res) => {
    const { dungeonId, playerName } = req.body;
  
    try {
      const dungeon = await Dungeon.findById(dungeonId).populate('monsters');
      if (!dungeon) return res.status(404).json({ message: 'Dungeon not found' });
  
      const player = await Player.findOne({ username: playerName });
      if (!player) return res.status(404).json({ message: 'Player not found' });
  
      // Generate monsters dynamically for difficulty
      const monsters = dungeon.monsters.map((monster) => {
        return {
          ...monster.toObject(),
          health: monster.health + dungeon.difficulty === 'Hard' ? 50 : 0,
          attack: monster.attack + dungeon.difficulty === 'Hard' ? 10 : 0,
          defense: monster.defense + dungeon.difficulty === 'Hard' ? 5 : 0,
        };
      });
  
      res.status(200).json({
        message: `Exploring dungeon: ${dungeon.name}`,
        monsters,
        loot: dungeon.loot,
      });
    } catch (error) {
      res.status(500).json({ message: 'Error exploring dungeon', error: error.message });
    }
  };