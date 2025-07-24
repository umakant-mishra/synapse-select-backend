import express from 'express';
import { saveToFile } from '../src/helper.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { email, score, feedback, status } = req.body;

  const data = {
    email,
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
