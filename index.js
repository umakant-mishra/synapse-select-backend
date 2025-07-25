import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import saveRoute from './routes/save-results.js';
import retrieveRoute from './routes/retrieve-results.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// Enable CORS for specific frontend origin

const allowedOrigins = [
  'https://synapse-select-ai-804971272594.europe-west1.run.app',
  'https://synapse-frontend-804971272594.europe-west1.run.app',
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));

app.use(bodyParser.json());

// routes
app.use('/api/save-results', saveRoute);
app.use('/api/retrieve-results', retrieveRoute);

app.get('/', (req, res) => {
  res.send('🎉 Backend is up and running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
