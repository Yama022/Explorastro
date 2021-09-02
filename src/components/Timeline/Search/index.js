import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';

export default function Search({
  changeField, searchInput, searchForPeople, searchResult,
}) {
  const handleFieldChange = (event) => {
    changeField(event.target.value, event.target.name);
    searchForPeople();
  };

  return (
    <div className="search control has-icons-left">
      <input
        className="search__input"
        type="text"
        placeholder="Rechercher une personne"
        value={searchInput}
        name="searchInput"
        onChange={handleFieldChange}
        onBlur={() => {
          setTimeout(() => {
            changeField('', 'searchInput');
          }, 100);
        }}
      />
      <span className="icon is-small is-left">
        <FaSearch />
      </span>
      {!(searchInput.length === 0) && (
        <ul className="search__list">
          {searchResult.map((result) => (
            <li className="search__list__item" key={result.id}>
              <Link to={`profile/${result.id}`}>
                <img src={result.avatar_url} className="search__list__item__img" alt="Avatar de l'utilisateur" />
                <span>{result.username}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Search.propTypes = {
  changeField: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  searchForPeople: PropTypes.func.isRequired,
  searchResult: PropTypes.array.isRequired,
};
