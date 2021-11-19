import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import { API_URL, RESOURCES } from './utils/constants';
import './App.scss';

import { IData } from './types';

function getCategories(data: IData[]): string[] {
  return [];
}

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState([]);
  const [resource, setResource] = useState(RESOURCES.INSTALLED);

  const fetchData = async (newResource: string) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}${newResource}`);
      const obj = await res.json();
      setData(obj.data[`${newResource}Sdks`]);
      setResource(newResource);
    } catch (err) {
      setError('Ops! Something went wrong with the API!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(resource);
  }, []);

  const handleFetch = (resource: string) => {
    fetchData(resource);
  };

  return (
    <div className="react-app">
      <h1>SDK App</h1>
      <Header onFetch={handleFetch} />
      {loading && <p>Loading data...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && data.length > 0 && (
        <Card data={data} heading={`${resource} SDKs`} latestUpdate="30 july 2021" total={data.length} />
      )}
    </div>
  );
}

export default App;
