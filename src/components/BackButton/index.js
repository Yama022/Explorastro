import React from 'react';

import { useHistory } from 'react-router-dom';

import { FaLongArrowAltLeft } from 'react-icons/fa';

export default function BackButton() {
  const history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };
  return (
    <button type="button" className="button --secondary" onClick={goToPreviousPath}>
      <span className="icon is-small">
        <FaLongArrowAltLeft />
      </span>
      <span> Retour </span>
    </button>
  );
}
