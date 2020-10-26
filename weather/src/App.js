import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  // state form
  const [search, setSearch] = useState({
    city: '',
    country: ''
  });
  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  const fetchAPI = async () => {
    if (query) {
      const appId = '1b5dbc47034bc30e7958319abaecc45f';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appId}`;

      const response = await fetch(url);
      const result = await response.json();

      setResult(result);
      setQuery(false);

      if (result.cod === '404') {
        setError(true);
      } else {
        setError(false);
      }
    }
  };

  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line
  }, [query]);

  let component;
  if (error) {
    component = <Error msg="No hay resultados" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title="Weather React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
