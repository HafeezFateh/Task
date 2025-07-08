import express from 'express';
import multer from 'multer';
import pool from '../db.js'; 
import { createPerson, getPerson } from '../controllers/personController.js';

const router = express.Router();


const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + file.originalname;
    cb(null, uniqueSuffix);
  },
});
const upload = multer({ storage });

router.post('/', upload.single('profilePic'), createPerson);
router.get('/:personId', getPerson);

router.post('/login', async (req, res) => {
  const { personId } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM persons WHERE person_id = $1',
      [personId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Person not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
