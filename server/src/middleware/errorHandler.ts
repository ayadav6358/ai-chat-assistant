import type { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import logger from '../logger/index.js';
import { HTTP_STATUS } from '../constants/http.js';
import { AppError } from '../errors/AppError.js';

export const errorHandler: ErrorRequestHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  if (error instanceof AppError) {
    logger.error({ message: error.message, statusCode: error.statusCode, details: error.details });
    res.status(error.statusCode).json({
      success: false,
      message: error.message,
      error: error.details ?? {},
    });
    return;
  }

  logger.error({ message: 'Unhandled error', error });
  res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: 'Internal server error',
    error: {},
  });
};
