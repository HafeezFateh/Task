import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import personRoutes from './routes/personRoutes.js';
import path from 'path';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();
const app = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // For profile images
app.use('/api/blogs', blogRoutes);

// Routes
app.use('/api/person', personRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
