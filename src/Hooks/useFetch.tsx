import React from 'react';

interface requestProps {
  url: string;

  options: {
    method: string;
    headers: {
      'Content-Type': string;
    };
    body: string;
  };
}

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async ({ url, options }: requestProps) => {
    let response;
    let json;
    try {
      setError(null); //limpa o erro que foi criado anteriormente na próxima tentativa;
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (err) {
      json = null;
      setError(err);
    } finally {
      setData(json);
      setLoading(false);
      // eslint-disable-next-line no-unsafe-finally
      return { response, json };
    }
  }, []);

  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
