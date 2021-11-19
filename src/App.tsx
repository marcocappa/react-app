import React, { useState, useEffect } from 'react';
import Button from './components/Button';

const APIs_URL = {
  INSTALLED: 'http://localhost:5001/installed',
  UNINSTALLED: 'http://localhost:5001/uninstalled',
};

function App(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [uninstalled, setUninstalled] = useState([]);

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const obj = await res.json();
      setUninstalled(obj.data.uninstalledSdks);
    } catch (err) {
      setError('Ops! Something went wrong with the API!');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(APIs_URL.UNINSTALLED);
  }, []);

  return (
    <div>
      <h1>SDK App</h1>
      <Button
        onClick={() => {
          console.log('clicked');
        }}
      >
        Click me
      </Button>
      {!error && !loading && uninstalled.length > 0 && uninstalled.map(({ id, name }) => <li key={id}>{name}</li>)}
    </div>
  );
}

export default App;
