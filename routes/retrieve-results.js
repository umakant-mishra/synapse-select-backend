import express from 'express';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
  const filePath = './data.json';

  if (!fs.existsSync(filePath)) {
    return res.json([]);
  }

  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const evaluations = JSON.parse(data);

    // map to send only selected fields
    const filtered = evaluations.map(e => ({
      email: e.email,
      status: e.status,
      feedback: e.feedback,
      score: e.score
    }));

    res.json(filtered);
  } catch (err) {
    console.error('❌ Error reading file:', err);
    res.status(500).json({ error: 'Failed to read evaluations.' });
  }
});

export default router;
