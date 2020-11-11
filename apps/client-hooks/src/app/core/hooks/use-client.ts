import React from 'react';

import { useAuth } from '../../auth/hooks/use-auth';
import { client } from '../services/api-client.service';

function useClient() {
  const { token } = useAuth();
  return React.useCallback(
    (endpoint, config?) => client(endpoint, { ...config, token }),
    [token]
  );
}

export { useClient };
