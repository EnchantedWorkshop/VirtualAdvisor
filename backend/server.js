import express from 'express';
import cors from 'cors';
import fs from 'fs'; // Import the file system module
import path from 'path'; // Import the path module
import { fileURLToPath } from 'url'; // To handle __dirname in ES modules

// ES module equivalents for __filename and __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies

// Basic Route
app.get('/', (req, res) => {
  res.send('Virtual Advisor Backend is running!');
});

// Placeholder API Endpoints
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend API!' });
});

// API endpoint to serve mock course data
app.get('/api/courses', (req, res) => {
  const coursesPath = path.join(__dirname, '..', 'data', 'mockCourses.json'); // Path relative to backend/server.js
  fs.readFile(coursesPath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading mock courses file:", err);
      return res.status(500).json({ error: 'Failed to load course data' });
    }
    res.json(JSON.parse(data));
  });
});

// TODO: Define more specific API endpoints as per the project plan
// Example: /api/courses, /api/majors/:majorId/curriculum, /api/user/:userId/plan

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 