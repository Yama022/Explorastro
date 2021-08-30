/* eslint-disable no-restricted-globals */
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder';

import L from 'leaflet';
import PropTypes from 'prop-types';

export default function ControlGeocoder({ coordLocation, coord }) {
  const map = useMap();
  let reverseTabCoord;
  const objCoord = {};
  // eslint-disable-next-line max-len
  let geocoder = L.Control.Geocoder.arcgis('AAPKcffce9aba8714a5f9f7d6c6fdc3f1c55pdj3nizxuNXswKYKCo0njoJsvKFgFniob5uOFbSUTnPn3zdOhJueIuGJWw9mskMm');
  useEffect(() => {
    if (typeof URLSearchParams !== 'undefined' && location.search) {
      // parse /?geocoder=nominatim from URL
      const params = new URLSearchParams(location.search);
      const geocoderString = params.get('geocoder');
      if (geocoderString && L.Control.Geocoder[geocoderString]) {
        geocoder = L.Control.Geocoder[geocoderString]();
      }
      else if (geocoderString) {
        console.warn('Unsupported geocoder', geocoderString);
      }
    }
    if (coord.length) {
      reverseTabCoord = coord.reverse();
      [objCoord.lat, objCoord.lng] = [reverseTabCoord[0], reverseTabCoord[1]];
      const latLon = L.latLng(reverseTabCoord);
      const bounds = latLon.toBounds(500);
      map.panTo(latLon).fitBounds(bounds);
      geocoder.reverse(latLon, 1, (resp) => (L.marker(objCoord)
        .addTo(map)
        .bindPopup(resp[0].name)
        .openPopup()));
    }
  }, [coord]);

  useEffect(() => {
    L.Control.geocoder({
      query: '',
      placeholder: 'adresse... ',
      defaultMarkGeocode: false,
      geocoder,
      collapsed: false,
      position: 'topleft',
    })
      .on('markgeocode', (e) => {
        const latlng = e.geocode.center;
        coordLocation(latlng);
        L.marker(latlng)
          .addTo(map)
          .bindPopup(e.geocode.name)
          .openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);
  return null;
}

ControlGeocoder.propTypes = {
  coordLocation: PropTypes.func.isRequired,
  coord: PropTypes.array,
};

ControlGeocoder.defaultProps = {

  coord: [],
};
