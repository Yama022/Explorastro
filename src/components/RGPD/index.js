import React, { useState } from 'react';
import { BiCookie } from 'react-icons/bi';

export default function RGPD() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="RGPD">
      <div className={modal ? 'modal is-active ' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card  animate__animated animate__fadeInDown">
          <header className="modal-card-head">
            <p className="modal-card-title"><BiCookie /> Accepter les cookies</p>
          </header>
          <section className="modal-card-body --report">
            <p>
              L'utilisation des cookies est nécessaire au bon fonctionnement de l'application,
              en poursuivant votre visite sur le site, vous acceptez le stockage de ces derniers
              sur votre navigateur.
            </p>
            <p>
              Merci de cliquer sur le boutton ci-dessous pour donner
              votre accord. Aucune de vos données ne sera utilisée
              à des fins commerciales et/ou publicitaires.
            </p>
          </section>
          <footer className="modal-card-foot">
            <button type="button" className="button --secondary" onClick={toggleModal}>J'accepte</button>
          </footer>
        </div>
      </div>
    </div>
  );
}
