import React from 'react';
import PropTypes from 'prop-types';
import { FiSend } from 'react-icons/fi';

const Comments = ({ comments }) => {
  console.log('comments', comments);
  return (
    <div className="Exploration__overview__left__comments">
      <h3>Commentaires</h3>
      <ul className="Exploration__overview__left__comments__list">
        <li className="Exploration__overview__left__comments__list__item">
          <div className="Exploration__overview__left__comments__list__item__author">
            <span className="avatar">
              <img
                src={image}
                alt=""
              />
            </span>
            <span>DavDav (Théo BIET)</span>
          </div>
          <span className="Exploration__overview__left__comments__list__item__text">
            <p>
              {comm}
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
};

Comments.propTypes = {
  comments: PropTypes.object,
};

Comments.defaultProps = {
  comments: {},
};

export default Comments;
