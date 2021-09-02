import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';
import Weather from './Weather';
import Information from './Information';
import Participants from './Participant';
import Comments from './Comments';
// import Author from './Author';

export default function Exploration({
  getExploration,
  id,
  exploration,
  removeOldStateExploration,
  onSubmitMessage,
  onChangeValue,
  getParticipate,
  notParticipate,
  loggedUserId,
}) {
  useEffect(() => {
    getExploration(id);
    return () => {
      removeOldStateExploration();
    };
  }, []);

  if (!exploration?.id) {
    return (<Loader />);
  }
  const { geog } = exploration;

  const coordinates = geog?.coordinates;

  const franceCoordinates = [48.856614, 2.352222];

  return (
    <div className="Exploration">
      <section className="Exploration__main">
        <Information
          information={exploration}
          getParticipate={getParticipate}
          notParticipate={notParticipate}
          loggedUserId={loggedUserId}
        />
        <Participants participants={exploration} />
      </section>
      <section className="Exploration__overview">
        <div className="Exploration__overview__left">
          <Weather />
          <Comments
            comments={exploration.comments}
            onSubmit={onSubmitMessage}
            onChangeValue={onChangeValue}
          />
        </div>
        <div className="Exploration__overview__map">
          <MapContainer
            center={coordinates ?? franceCoordinates}
            zoom={6}
            maxZoom={18}
            minZoom={3}
            className="Exploration__overview__map__elem"
          >
            {/* Add layer dark map */}
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.STADIA_API_KEY}`}
              name="tiles"
            />
            {/* Add Markers events astro on the map */}
            <Marker names="marker" position={coordinates ?? franceCoordinates} />
          </MapContainer>
        </div>
      </section>
      {/* TO DO: Finir l'intégrations du composant (Informations de l'autheur) @see Wireframes */}
      {/* <Author /> */}
    </div>
  );
}

Exploration.propTypes = {
  getExploration: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  exploration: PropTypes.object.isRequired,
  removeOldStateExploration: PropTypes.func.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  getParticipate: PropTypes.func.isRequired,
  notParticipate: PropTypes.func.isRequired,
  loggedUserId: PropTypes.number.isRequired,
};
