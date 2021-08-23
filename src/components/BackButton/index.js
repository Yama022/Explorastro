import React from 'react';

import { useHistory } from 'react-router-dom';

import { FcLeft } from 'react-icons/fc';

export default function BackButton() {
  const history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <button type="button" className="button --secondary" onClick={goToPreviousPath}>
      <span className="icon is-small">
        <FcLeft />
      </span>
      <span> Retour </span>
    </button>
  );
}
