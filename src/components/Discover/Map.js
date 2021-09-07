import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  MapContainer, TileLayer, Marker, Popup, useMap,
} from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import home from 'src/assets/images/map/home.png';
import markerIcon from 'src/assets/images/map/telescope.png';
import { FaInfoCircle } from 'react-icons/fa';

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
    <>
      {eventsList.map((element) => {
        const lat = element.geog.coordinates[1];
        const long = element.geog.coordinates[0];
        const coord = [lat, long];
        return (
          <div key={element.id}>
            <Marker names="marker" position={coord} icon={telescopIcon}>
              <Popup name="popup" className="map-popup">
                <h3>{element.name}</h3>
                <img src={element.image_url} alt={element.name} />
                <Link className="button --secondary" to={`/exploration/${element.id}`}>
                  <span className="icon">
                    <FaInfoCircle />
                  </span>
                  <span>Informations</span>
                </Link>
              </Popup>
            </Marker>
          </div>
        );
      })}

      <Marker position={positionGeoloc} icon={homeIcon}>
        <Popup>
          Votre domicile
        </Popup>
      </Marker>
    </>
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
