import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ onChange, search }) {
  return (
    <div className="search">
      <input className="input" type="text" placeholder="Rechercher une personne" value={search} name="searchSomeone" onChange={onChange} />
    </div>
  );
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
};
