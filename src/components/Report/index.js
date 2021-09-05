/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaBug } from 'react-icons/fa';

export default function Report({
  handleSubReport,
  getInitialState,
  reportChange,
  object,
  content,
  reportModalIsOpen,
  onToggleModal,
}) {
  useEffect(() => {
    getInitialState();
  }, []);

  const handleChangeReport = (event) => {
    event.preventDefault();
    const { value, name } = event.target;
    reportChange(value, name);
  };

  return (
    <>
      <div className="report animate__animated animate__fadeInRight" onClick={onToggleModal}>
        <span className="icon"><FaBug /></span>
        <span>Signaler un bug</span>
      </div>
      <div className={reportModalIsOpen ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card animate__animated animate__fadeInDown">
          <header className="modal-card-head">
            <p className="modal-card-title"><FaBug /> Signaler un bug</p>
            <button type="button" className="delete" aria-label="close" onClick={onToggleModal} />
          </header>
          <section className="modal-card-body --report">
            <h3>
              Je décris mon problème
            </h3>
            <div className="select">
              <select value={object} name="object" onChange={handleChangeReport}>
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
            <textarea type="text" control="content" value={content} name="content" className="textarea" placeholder="J'explique le problème rencontré" onChange={handleChangeReport} />
          </section>
          <footer className="modal-card-foot">
            <button type="button" className="button --secondary" onClick={onToggleModal}>Annuler</button>
            <button type="button" className="button --outlined" onClick={handleSubReport}>Envoyer</button>
          </footer>
        </div>
      </div>
    </>
  );
}

Report.propTypes = {
  handleSubReport: PropTypes.func,
  getInitialState: PropTypes.func,
  reportChange: PropTypes.func,
  object: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  reportModalIsOpen: PropTypes.bool.isRequired,
  onToggleModal: PropTypes.func,
};

Report.defaultProps = {
  handleSubReport: () => {},
  getInitialState: () => {},
  reportChange: () => { },
  onToggleModal: () => { },
};
