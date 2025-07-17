import express from 'express'

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.send({ status: 'Backend is running!' });
});

app.listen(port, () => console.log(`Server on http://localhost:${port}`));