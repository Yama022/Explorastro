import React from 'react';

import PropTypes from 'prop-types';

export default function ThirdPart({ img, link, name }) {
  return (
    <figure className="figGuide">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={name} />
      </a>
      <figcaption className="exemple"> {name} </figcaption>
    </figure>
  );
}

ThirdPart.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
