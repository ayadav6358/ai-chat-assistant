import type { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS } from '../constants/http.js';

export const notFoundHandler = (req: Request, res: Response, _next: NextFunction): void => {
  res.status(HTTP_STATUS.NOT_FOUND).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
    error: {},
  });
};
