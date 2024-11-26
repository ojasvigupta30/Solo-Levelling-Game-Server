import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.mjs';

// Register a new user
export const registerUser = async (reqs, resp) => {
    const { username, password, email } = reqs.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return resp.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({ username, password: hashedPassword, email });

        resp.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        resp.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

// Authenticate user (Login)
export const loginUser = async (reqs, resp) => {
    const { username, password } = reqs.body;

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return resp.status(400).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return resp.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        resp.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        resp.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

// Get all users (Admin-only example)
export const getUsers = async (reqs, resp) => {
    try {
        const users = await User.find({}, '-password'); // Exclude passwords from the response
        resp.status(200).json(users);
    } catch (error) {
        resp.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// Delete a user
export const deleteUser = async (reqs, resp) => {
    const { id } = reqs.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return resp.status(404).json({ message: 'User not found' });
        }

        resp.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        resp.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};
