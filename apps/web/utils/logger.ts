import { default as logger } from 'loglevel';
import { isDev } from 'config/env';

const level = isDev ? 'trace' : 'error';
logger.setLevel(level);

export default logger;
