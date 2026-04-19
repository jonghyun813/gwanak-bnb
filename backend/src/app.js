import cors from 'cors';
import express from 'express';
import { apiRouter } from './routes/index.js';
import { errorHandler, notFoundHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(
  cors({
    origin: true,
  })
);
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.status(200).json({
    status: 'ok',
    message: 'Gwanak BnB API is running',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api', apiRouter);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
