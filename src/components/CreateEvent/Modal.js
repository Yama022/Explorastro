/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import mascotRocket from 'src/assets/images/mascot-rocket.svg';
import PropTypes from 'prop-types';

export default function Modal({ onClickModal, modal, titleEvent }) {
  const handleOnClickModal = () => {
    onClickModal();
  };

  return (
    <div className={modal ? 'modal is-active' : 'modal'}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Exploration : {titleEvent}</p>
          <button className="delete" aria-label="close" onClick={handleOnClickModal} />
        </header>
        <section className="modal-card-body">
          <img className="modal-card-body-mascotte" src={mascotRocket} alt="Belle mascotte" />
          <p>"Vos modifications ont bien été pris en compte"</p>
        </section>
        <footer className="modal-card-foot">
          <Link className="button--modal" to="/exploration/create" onClick={handleOnClickModal}>Fermer </Link>
        </footer>
      </div>
    </div>

  );
}

Modal.propTypes = {
  onClickModal: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  titleEvent: PropTypes.string.isRequired,
};
