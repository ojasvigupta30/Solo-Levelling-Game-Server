# Solo Leveling Backend

This is the backend for the Solo Leveling-inspired game application. It is built with **Node.js**, **Express**, and **MongoDB** to handle authentication, player data, dungeon exploration, combat mechanics, and loot management.

## Solo-Levelling Frontend

[Frontend UI](https://github.com/ojasvigupta30/Solo-Levelling-Game-UI?tab=readme-ov-file)

## Features

- **User Authentication**: Register and login using JWT-based authentication.
- **Player Management**: Create or update player profiles, stats, inventory, and skills.
- **Dungeon Exploration**: Fetch available dungeons, view details, and explore them.
- **Combat Mechanics**: Engage in combat with monsters, gain XP, and loot items.
- **Leaderboard**: View the top players based on their level and XP.

---

## Project Structure

```plaintext
.
├── config/
│   ├── db.mjs              # MongoDB connection
├── controllers/
│   ├── combatController.mjs # Combat mechanics
│   ├── dungeonController.mjs # Dungeon exploration
│   ├── playerController.mjs  # Player management
│   ├── userController.mjs    # User authentication
├── middleware/
│   ├── authMiddleware.mjs    # JWT authentication middleware
│   ├── errorHandler.mjs      # Global error handling middleware
├── models/
│   ├── Dungeon.mjs           # Dungeon schema
│   ├── Monster.mjs           # Monster schema
│   ├── Player.mjs            # Player schema
│   ├── User.mjs              # User schema
├── routes/
│   ├── combatRoutes.mjs      # Routes for combat
│   ├── dungeonRoutes.mjs     # Routes for dungeons
│   ├── playerRoutes.mjs      # Routes for players
│   ├── userRoutes.mjs        # Routes for user authentication
├── .env                      # Environment variables (JWT secret, DB URL, etc.)
├── server.mjs                # Entry point for the backend
```

## Prerequisites

Ensure you have the following installed:

- Node.js (v16 or later)
- npm or yarn
- MongoDB (local or remote instance)


## Installation

1. Clone the Repository:

```bash
git clone https://github.com/ojasvigupta30/Solo-Levelling-Game-Server.git
```

2. Install Dependencies:

```bash
npm install
```

3. Set Up Environment Variables: Create a .env file in the root directory and configure the following:

```bash
PORT=5000
JWT_SECRET=your_secret_key
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db-name
```

4. Start the Server:

```bash
npm start
```

The server should now be running at http://localhost:5000.


## API Endpoints

### User Authentication

| Endpoint            | Method | Description          |
|---------------------|--------|----------------------|
| `/api/users/register` | POST   | Register a new user  |
| `/api/users/login`    | POST   | Login and receive JWT |

---

### Player Management

| Endpoint                | Method | Description                       |
|--------------------------|--------|-----------------------------------|
| `/api/players`           | POST   | Create or update a player profile |
| `/api/players/:username` | GET    | Fetch player details              |
| `/api/players/:username/xp` | PATCH | Add XP and level up a player      |

---

### Dungeon Management

| Endpoint                | Method | Description                 |
|--------------------------|--------|-----------------------------|
| `/api/dungeons`          | GET    | Fetch all available dungeons |
| `/api/dungeons/:id`      | GET    | Fetch dungeon details        |
| `/api/dungeons/explore`  | POST   | Explore a dungeon            |

---

### Combat

| Endpoint            | Method | Description                 |
|---------------------|--------|-----------------------------|
| `/api/combat/battle` | POST   | Engage in combat with a monster |

---

## Technologies Used

- **Node.js**: Backend runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database for storing game data
- **Mongoose**: MongoDB object modeling
- **JWT**: Authentication
- **dotenv**: Environment variable management


---

## Development

### Run in Development Mode
```bash
npm run dev
```

### Run in Production Mode
```bash
npm start
```

## Future Improvements

- Add more advanced combat mechanics.
- Implement trading or crafting systems.
- Enhance leaderboard with additional filters and rankings.
- Introduce boss battles with unique mechanics.



