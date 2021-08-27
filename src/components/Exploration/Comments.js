import React from 'react';
import { FiSend } from 'react-icons/fi';

const Comments = () => (
  <div className="Exploration__overview__left__comments">
    <h3>Commentaires</h3>
    <ul className="Exploration__overview__left__comments__list">
      <li className="Exploration__overview__left__comments__list__item">
        <div className="Exploration__overview__left__comments__list__item__author">
          <span className="avatar">
            <img
              src="https://www.recia.fr/wp-content/uploads/2018/10/default-avatar-300x300.png"
              alt=""
            />
          </span>
          <span>DavDav (Théo BIET)</span>
        </div>
        <span className="Exploration__overview__left__comments__list__item__text">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Culpa, soluta ratione. Cupiditate iure excepturi maxime
            consequatur accusamus reprehenderit officia tempora eos,
            iste aut eum? Exercitationem consequatur animi explicabo
            minus dolor!
          </p>
        </span>
      </li>
    </ul>
    <div className="Exploration__overview__left__comments__form">
      <div className="Exploration__overview__left__comments__form__input">
        <input
          type="text"
          placeholder="Commenter"
          className="Exploration__overview__left__comments__form__input__input input"
        />
      </div>
      <div className="Exploration__overview__left__comments__form__button">
        <button
          type="submit"
          className="Exploration__overview__left__comments__form__button__button button --secondary"
        >
          <FiSend />
        </button>
      </div>
    </div>
  </div>
);

export default Comments;
