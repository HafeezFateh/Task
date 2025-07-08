import pool from '../db.js';

import path from 'path';

export const createPerson = async (req, res) => {
  try {
    const { name, personId } = req.body;
    const profilePic = req.file ? req.file.filename : null;

    const result = await pool.query(
      'INSERT INTO persons (name, person_id, profile_pic) VALUES ($1, $2, $3) RETURNING *',
      [name, personId, profilePic]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create person' });
  }
};

export const getPerson = async (req, res) => {
  try {
    const { personId } = req.params;

    const result = await pool.query(
      'SELECT * FROM persons WHERE person_id = $1',
      [personId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Person not found' });
    }

    const person = result.rows[0];
    person.profile_pic_url = `/uploads/${person.profile_pic}`;

    res.json(person);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch person' });
  }
};
