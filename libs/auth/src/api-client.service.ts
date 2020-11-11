const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:1337';

interface ApiClientOptions {
  data?: any;
  token?: string;
  headers?: Record<string, string>;
  customConfig?: Record<string, any>;
}

async function client(
  endpoint: string,
  {
    data,
    token,
    headers: customHeaders,
    ...customConfig
  }: ApiClientOptions = {}
) {
  const config = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json' : '',
      ...customHeaders,
    },
    ...customConfig,
  };

  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        // handle re-auth
        return Promise.reject({ message: 'Please re-authenticate.' });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { client };
