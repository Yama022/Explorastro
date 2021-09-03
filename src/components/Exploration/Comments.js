import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiSend } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { FaPen } from 'react-icons/fa';

const Comments = ({
  comments, onSubmit, onChangeValue, deleteComment,
}) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const handleChange = (event) => {
    onChangeValue(event.target.value, event.target.name);
  };

  const handleDelete = (event) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce commentaire?')) {
      const button = event.target.closest('li');
      const { id } = button.dataset;
      deleteComment(id);
    }
  };

  return (
    <div className="Exploration__overview__left__comments">
      <h3>Commentaires</h3>
      <ul className="Exploration__overview__left__comments__list">
        {comments.map((comment) => (
          <li key={comment.id} data-id={comment.id} className="Exploration__overview__left__comments__list__item">
            <div className="Exploration__overview__left__comments__list__item__author">
              <Link to={`/profile/${comment.author_id}`}>
                <span className="Exploration__overview__left__comments__list__item__author__avatar">
                  <img
                    src={comment.author?.avatar_url}
                    alt=""
                  />
                </span>
              </Link>
              {/* eslint-disable-next-line max-len */}
              <Link to={`/profile/${comment.author_id}`}>
                <span className="Exploration__overview__left__comments__list__item__author__username">{comment.author?.username}</span>
              </Link>
            </div>
            <span className="Exploration__overview__left__comments__list__item__text">
              <p>
                {comment.content}
              </p>
            </span>
            <div className="Exploration__overview__left__comments__list__item__icons">
              <FaPen
                className="Exploration__overview__left__comments__list__item__icons__elem"
                onClick={() => {
                  console.log('Edit');
                }}
              />
              <ImCross
                className="Exploration__overview__left__comments__list__item__icons__elem"
                onClick={handleDelete}
              />
            </div>
          </li>
        ))}
      </ul>
      <form className="Exploration__overview__left__comments__form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Commenter"
          className="Exploration__overview__left__comments__form__input input"
          onChange={handleChange}
          name="comment"
        />
        <button
          type="submit"
          className="Exploration__overview__left__comments__form__button button --secondary"
        >
          <FiSend />
        </button>
      </form>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
  onSubmit: PropTypes.func,
  onChangeValue: PropTypes.func,
  deleteComment: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  comments: [],
  onSubmit: {},
  onChangeValue: {},
};

export default Comments;
