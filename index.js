import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import saveRoute from './routes/save-results.js';
import retrieveRoute from './routes/retrieve-results.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// middlewares
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Allow non-browser tools like curl

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`❌ Not allowed by CORS: ${origin}`));
    }
  },
  methods: ['POST', 'GET', 'OPTIONS'],
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
