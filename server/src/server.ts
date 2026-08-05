import app from './app.js';
import { env } from './config/env.js';
import logger from './logger/index.js';

const port = env.port;

app.listen(port, () => {
  logger.info({ message: 'Server started', port, environment: env.nodeEnv });
});
