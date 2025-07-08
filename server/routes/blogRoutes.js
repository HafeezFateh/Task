import express from 'express';
import pool from '../db.js';

const router = express.Router();

//---------------- POST /api/blogs - Add a new blog ------------
router.post('/', async (req, res) => {
  const { title, passage } = req.body;

  if (!title || !passage) {
    return res.status(400).json({ error: "Title and passage are required" });
  }

  try {
    await pool.query(
      'INSERT INTO blogs (title, passage) VALUES ($1, $2)',
      [title, passage]
    );
    res.status(201).json({ message: " Blog added successfully!" });
  } catch (err) {
    console.error("Insert blog error:", err);
    res.status(500).json({ error: " Failed to add blog" });
  }
});

// --------------- GET /api/blogs - Fetch all blogs --------------

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error("Fetch blogs error:", err);
    res.status(500).json({ error: "Failed to fetch blogs" });
  }
});


export default router;
