import React from 'react';

const Participant = () => (
  <div className="Exploration__main__participants">
    <h3>Participants (max. 10)</h3>
    <ul className="Exploration__main__participants__list">
      <li className="Exploration__main__participants__list__item">
        <span className="icon">
          <img
            src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
            alt=""
          />
        </span>
        <span>DavDav (Théo BIET)</span>
        <span>
          <button type="button" className="button --secondary">
            i
          </button>
        </span>
      </li>
    </ul>
  </div>

);

export default Participant;
