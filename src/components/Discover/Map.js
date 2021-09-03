import React, { useEffect, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import uuid from 'uuid';
import {
  MapContainer, TileLayer, Marker, Popup, useMap,
} from 'react-leaflet';
import L from 'leaflet';
import home from 'src/assets/images/map/home.png';
import markerIcon from 'src/assets/images/map/telescope.png';

const telescopIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const homeIcon = L.icon({
  iconUrl: home,
  iconSize: [30, 20],
});

export default function Map({ eventsList, fieldZone }) {
  // eslint-disable-next-line new-cap
  function LocationMarker() {
    const [positionGeoloc, setPosition] = useState(null);
    const map = useMap();

    useEffect(() => {
      let isCancelled = false;

      // Localisation de l'utilisateur
      map.locate().on('locationfound', (e) => {
        if (!isCancelled) {
          setPosition(e.latlng);
          // Définit la vue de la carte (centre géographique et zoom)
          // map.flyTo(e.latlng, map.getZoom());
          // Précision de la localisation en mètres

          let circle;

          map.eachLayer((layer) => {
            if (layer.options.name !== 'tiles' && layer.name !== 'MarkerClusterGroup') {
              map.removeLayer(layer);
            }
          });

          const radius = fieldZone * 1000;
          circle = L.circle(e.latlng, radius, { color: '#220033' });

          // rendu géométrique
          circle = L.circle(e.latlng, radius, { color: '#220033' });
          circle.addTo(map);
        }
      });

      return () => {
        isCancelled = true;
      };
    }, [fieldZone]);

    return positionGeoloc && (
      <MarkerClusterGroup
        name="MarkerClusterGroup"
        key={uuid.v4()}
      >
        {eventsList.map((element) => {
          const lat = element.geog.coordinates[1];
          const long = element.geog.coordinates[0];
          const coord = [lat, long];
          return (
            <div key={element.id}>
              <Marker names="marker" position={coord} icon={telescopIcon}>
                <Popup name="popup">{element.name}</Popup>
              </Marker>
            </div>
          );
        })}

        <Marker position={positionGeoloc} icon={homeIcon}>
          <Popup>
            Votre domicile
          </Popup>
        </Marker>
      </MarkerClusterGroup>
    );
  }

  return (
    <MapContainer
    // Centering on the map of france
      className="discover__map__elem"
      center={[46.232192999999995, 2.209666999999996]}
      zoom={6.4}
      maxZoom={18}
      minZoom={3}
    >

      {/* Add layer dark map */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${process.env.STADIA_API_KEY}`}
        name="tiles"
      />
      {/* Add Markers events astro on the map */}

      <LocationMarker />

    </MapContainer>

  );
}

Map.propTypes = {
  eventsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  fieldZone: PropTypes.number.isRequired,
};
