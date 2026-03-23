import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api', routes);

// Basic test route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript Express API!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});