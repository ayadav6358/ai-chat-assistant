export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: Record<string, unknown>;
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
