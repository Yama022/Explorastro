/* eslint-disable max-len */
import React, { useState } from 'react';
import { FaBug } from 'react-icons/fa';

export default function Report() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="report animate__animated animate__fadeInRight" onClick={toggleModal}>
        <span className="icon"><FaBug /></span>
        <span>Signaler un bug</span>
      </div>
      <div className={modal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card animate__animated animate__fadeInDown">
          <header className="modal-card-head">
            <p className="modal-card-title"><FaBug /> Signaler un bug</p>
            <button type="button" className="delete" aria-label="close" onClick={toggleModal} />
          </header>
          <section className="modal-card-body --report">
            <h3>
              Je décris mon problème
            </h3>
            <div className="select">
              <select>
                <option>Sélectionner une raison</option>
                <option>
                  Je rencontre un soucis sur une page (je précise en commentaire mon soucis)
                </option>
                <option>
                  Je rencontre un problème avec un utilisateur (je précise la nature / raison du problème en commentaire)
                </option>
                <option>Je rencontre un soucis non mentionné (je précise en commentaire)</option>
              </select>
            </div>
            <textarea type="text" control="content" name="content" className="textarea" placeholder="J'explique le problème rencontré" />
          </section>
          <footer className="modal-card-foot">
            <button type="button" className="button --secondary" onClick={toggleModal}>Annuler</button>
            <button type="button" className="button --outlined" onClick={toggleModal}>Envoyer</button>
          </footer>
        </div>
      </div>
    </>
  );
}
