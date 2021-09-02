import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiSend } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

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
  return (
    <div className="Exploration__overview__left__comments">
      <h3>Commentaires</h3>
      <ul className="Exploration__overview__left__comments__list">
        {comments.map((comment) => (
          <li key={comment.id} data-id={comment.id} className="Exploration__overview__left__comments__list__item">
            <Link to={`/profile/${comment.author_id}`} className="Exploration__overview__left__comments__list__item__author">
              <span className="Exploration__overview__left__comments__list__item__author__avatar">
                <img
                  src={comment.author?.avatar_url}
                  alt=""
                />
              </span>
              {/* eslint-disable-next-line max-len */}
              <span>{comment.author?.username} </span>
            </Link>
            <span className="Exploration__overview__left__comments__list__item__text">
              <p>
                {comment.content}
              </p>
              <button
                className="Exploration__overview__left__comments__list__item__text__button"
                type="button"
                onClick={(event) => {
                  const button = event.target.closest('li');
                  const { id } = button.dataset;
                  deleteComment(id);
                }}
              >
                <ImCross />
              </button>
            </span>
          </li>
        ))}
      </ul>
      <form className="Exploration__overview__left__comments__form" onSubmit={handleOnSubmit}>
        <div className="Exploration__overview__left__comments__form__input">
          <input
            type="text"
            placeholder="Commenter"
            className="Exploration__overview__left__comments__form__input__input input"
            onChange={handleChange}
            name="comment"
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
