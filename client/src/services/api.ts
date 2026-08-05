import appConfig from '../config/app';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
  error?: Record<string, unknown>;
}

export interface HealthResponse {
  name: string;
  environment: string;
}

class ApiClient {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(path: string, init?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...init,
    });

    const payload = (await response.json()) as ApiResponse<T>;

    if (!response.ok) {
      throw new Error(payload.message ?? 'Request failed');
    }

    return payload.data as T;
  }

  async getHealth(): Promise<HealthResponse> {
    return this.request<HealthResponse>('/health');
  }
}

const apiClient = new ApiClient(appConfig.apiBaseUrl);

export default apiClient;
