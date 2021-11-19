import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { API_URL, RESOURCES } from './utils/constants';

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState([]);

  const fetchData = async (resource: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}${resource}`);
      const obj = await res.json();
      setData(obj.data[`${resource}Sdks`]);
    } catch (err) {
      setError('Ops! Something went wrong with the API!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(RESOURCES.INSTALLED);
  }, []);

  const handleFetch = (resource: string) => {
    fetchData(resource);
  };

  return (
    <div>
      <h1>SDK App</h1>
      <Header onFetch={handleFetch} />
      {!error && !loading && data.length > 0 && data.map(({ id, name }) => <li key={id}>{name}</li>)}
    </div>
  );
}

export default App;
