import React, { useState } from 'react';

const Weather: React.FunctionComponent = () => {
  const [expanded, setExpanded] = useState;
  const temp = 14;
  const suburb = 'Knox';
  const convertToF = (temp: number): number => Math.round((temp * 9) / 5 + 32);
  const tempString = (temp: number): string => {
    let localMetric = window.localStorage.getItem('units');
    if (!localMetric || !(localMetric in ['C', 'F'])) {
      window.localStorage.setItem('units', 'C');
      localMetric = 'C';
    }

    if (localMetric == 'C') return `${temp}`;
    return `${convertToF(temp)}`;
  };
  return (
    <div className="tile">
      <div className="weather">
        <span className="img" />
        {tempString(temp)}&deg;
      </div>
      <span className="loc"> {suburb} </span>
    </div>
  );
};

export default Weather;
