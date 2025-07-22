import express from 'express';
import { saveToFile } from '../src/helper.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { email, name, score, feedback, status } = req.body;

  // if (!email || !name || score == null || !feedback || !status) {
  //   return res.status(400).json({ error: 'Missing required fields.' });
  // }

  const data = {
    email,
    name,
    score,
    feedback,
    status,
    timestamp: new Date()
  };

  console.log('✅ Received evaluation:', data);

  saveToFile(data);

  res.status(200).json({ message: 'Evaluation saved successfully.' });
});

export default router;
