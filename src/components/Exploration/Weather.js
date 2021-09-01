import React from 'react';

const Weather = () => (
  <div className="Exploration__overview__left__weather">
    <div className="Exploration__overview__left__weather__icon">
      <img
        src="http://openweathermap.org/img/wn/01n.png"
        // ${props.icon}
        alt="Current weather icon"
      />
    </div>
    <div className="Exploration__overview__left__weather__temp">
      {/* {props.weather} */}
      25°C
    </div>
  </div>
);

export default Weather;
