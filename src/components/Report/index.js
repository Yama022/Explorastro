import React, { useState } from 'react';
import { FaBug } from 'react-icons/fa';

export default function Report() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="report" onClick={toggleModal}>
        <span className="icon"><FaBug /></span>
        <span>Signaler un bug</span>
      </div>
      <div className={modal ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card">
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
                <option>Je rencontre un bug</option>
                <option>Je rencontre un bug</option>
                <option>Je rencontre un bug</option>
              </select>
            </div>
            <textarea type="text" control="content" name="content" className="textarea" placeholder="Text input" />
          </section>
          <footer className="modal-card-foot">
            <button type="button" className="button purple">Envoyer</button>
            <button type="button" className="button --outlined" onClick={toggleModal}>Annuler</button>
          </footer>
        </div>
      </div>
    </>
  );
}
