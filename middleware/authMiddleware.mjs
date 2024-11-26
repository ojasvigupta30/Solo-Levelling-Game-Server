import jwt from 'jsonwebtoken';

export const authenticateToken = (reqs, resp, next) => {
    const token = reqs.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return resp.status(401).json({ message: 'Access denied, no token provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        reqs.user = decoded; // Attach decoded user info to the request object
        next();
    } catch (error) {
        resp.status(403).json({ message: 'Invalid or expired token' });
    }
};
