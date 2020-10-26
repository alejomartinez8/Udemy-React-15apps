import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ result }) => {
  // extra values
  const { name, main } = result;

  if (!name) return null;

  // Kelvin to
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>The Weather of {name} is: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> °C</span>
        </p>
        <p>
          Max Temp {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> °C</span>
        </p>
        <p>
          Min Temp {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> °C</span>
        </p>
      </div>
    </div>
  );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired
};

export default Weather;
