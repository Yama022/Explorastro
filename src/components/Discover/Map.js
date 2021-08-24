import React, { useEffect, useState } from 'react';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import {
  MapContainer, TileLayer, Marker, Popup, useMap,
} from 'react-leaflet';
import L from 'leaflet';
import home from './home.png';

export default function Map({ eventsList, fieldZone }) {
  // eslint-disable-next-line new-cap
  const newicon = new L.icon({
    iconUrl: home,
    iconSize: [30, 30],
  });
  function LocationMarker() {
    const reverseCoord = eventsList.map((element) => {
      const reverseTabCoord = element.geog.coordinates.reverse();
      const obj = {
        id: element.id,
        name: element.name,
        coord: reverseTabCoord,
      };
      return (obj);
    });
    console.log(reverseCoord);
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
          circle = L.circle(e.latlng, radius);

          // rendu géométrique
          circle = L.circle(e.latlng, radius);
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
        {reverseCoord.map((element) => (
          <div key={element.id}>
            <Marker names="marker" position={element.coord} id="foo">
              <Popup name="popup">Exploration vers {element.name}</Popup>
            </Marker>
          </div>
        ))}

        <Marker position={positionGeoloc} icon={newicon}>
          <Popup>
            tu es la
          </Popup>
        </Marker>
      </MarkerClusterGroup>
    );
  }

  return (
    <MapContainer
    // Centering on the map of france
      center={[46.232192999999995, 2.209666999999996]}
      zoom={6.4}
      maxZoom={18}
      minZoom={3}
    >

      {/* Add layer dark map */}
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
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
