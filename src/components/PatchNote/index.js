/* eslint-disable max-len */
import React, { useState } from 'react';
import { BiGitPullRequest } from 'react-icons/bi';

export default function Report() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="patch-note animate__animated animate__fadeInLeft" onClick={toggleModal}>
        <span className="icon"><BiGitPullRequest /></span>
        <span>Patch-Note</span>
      </div>
      <div className={modal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card animate__animated animate__fadeInDown">
          <header className="modal-card-head">
            <p className="modal-card-title"><BiGitPullRequest /> Patch-Note</p>
            <button type="button" className="delete" aria-label="close" onClick={toggleModal} />
          </header>
          <section className="modal-card-body --report">
            <h3>
              Version 1.0.0 - 04 Septembre 2021
            </h3>
            <ul>
              <li>
                <span>Ajout</span> de la page de connexion
              </li>
              <li>
                <span>Ajout</span> de la page de création de compte
              </li>
              <li>
                <span>Correction</span> du bug de la page de connexion
              </li>
              <li>
                <span>Retrait</span> de la page de création de compte
              </li>
            </ul>
          </section>
          <footer className="modal-card-foot">
            <button type="button" className="button --outlined" onClick={toggleModal}>Annuler</button>
          </footer>
        </div>
      </div>
    </>
  );
}
