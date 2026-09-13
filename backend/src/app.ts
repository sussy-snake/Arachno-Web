import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import healthRoutes from './routes/health.routes';
import donationRoutes from './routes/donation.routes';
import { errorHandler } from './middlewares/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

// Middleware
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
app.use(cors({
  origin: frontendUrl,
  optionsSuccessStatus: 200,
}));
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api', healthRoutes);
app.use('/api', donationRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
