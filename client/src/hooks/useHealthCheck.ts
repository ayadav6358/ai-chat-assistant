import { useEffect, useState } from 'react';
import apiClient from '../services/api';

export interface HealthStatus {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
  data?: {
    name: string;
    environment: string;
  };
}

export function useHealthCheck() {
  const [health, setHealth] = useState<HealthStatus>({
    status: 'idle',
    message: 'Waiting for health check',
  });

  useEffect(() => {
    let isMounted = true;

    const loadHealth = async () => {
      try {
        setHealth({ status: 'loading', message: 'Checking backend connection...' });
        const result = await apiClient.getHealth();
        if (isMounted) {
          setHealth({ status: 'success', message: 'Backend connected', data: result });
        }
      } catch (error) {
        if (isMounted) {
          setHealth({
            status: 'error',
            message: error instanceof Error ? error.message : 'Unable to reach backend',
          });
        }
      }
    };

    void loadHealth();

    return () => {
      isMounted = false;
    };
  }, []);

  return health;
}
