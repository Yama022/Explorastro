import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ data }) => (
  <>
    {data?.list?.length ? (
      <div className="Exploration__overview__left__weather animate__animated animate__fadeIn">
        <div className="Exploration__overview__left__weather__icon">
          <img
            src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`}
            alt={data.list[0].weather[0].description}
          />
        </div>
        <div className="Exploration__overview__left__weather__temp">
          {Math.floor(data.list[0].main.temp)}°C
        </div>
      </div>
    ) : (
      <div className="Exploration__overview__left__weather">
        Aucune informations météo n'est disponible
      </div>
    )}
  </>
);

export default Weather;

Weather.propTypes = {
  data: PropTypes.object,
};

Weather.defaultProps = {
  data: {},
};
