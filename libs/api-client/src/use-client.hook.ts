import React from 'react';

import { useAuth } from '@react-state-comparison/auth';
import { client } from './api-client.service';

function useClient() {
  const { token } = useAuth();
  return React.useCallback(
    (endpoint, config?) => client(endpoint, { ...config, token }),
    [token]
  );
}

export { useClient };
