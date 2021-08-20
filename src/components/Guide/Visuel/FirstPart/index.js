import React from 'react';

import PropTypes from 'prop-types';

export default function FirstPart({ img, link, name }) {
  return (
    <div>
      <figure className="guide__paragraphe__two__paragraphe__elements">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt={name} />
        </a>
        <figcaption className="exemple"> {name} </figcaption>
      </figure>
    </div>
  );
}

FirstPart.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
