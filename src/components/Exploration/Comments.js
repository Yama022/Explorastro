import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiSend } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { FaPen } from 'react-icons/fa';

const Comments = ({
  comments,
  onSubmit,
  onChangeValue,
  deleteComment,
  modifyComment,
  commentInput,
  commentEditInput,
  commentEditOpen,
  toggleEditComment,
  editCommentValue,
  editCommentId,
  loggedUserId,
  commentFieldHasError,
  handleFieldHasError,
}) => {
  const handleValidation = (actionType) => {
    let isValid = true;
    const errors = {};

    if (actionType === 'edit') {
      if (commentEditInput.length <= 2) {
        errors.commentInput = '3 caractères minimums';
        isValid = false;
      }

      if (commentEditInput.length > 280) {
        errors.commentInput = '280 caractères maximums';
        isValid = false;
      }
    }

    if (actionType === 'add') {
      if (commentInput.length <= 2) {
        errors.commentInput = '3 caractères minimums';
        isValid = false;
      }

      if (commentInput.length > 280) {
        errors.commentInput = '280 caractères maximums';
        isValid = false;
      }
    }

    handleFieldHasError(errors);
    return isValid;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (handleValidation('add')) {
      onSubmit();
    }
  };

  const handleChange = (event) => {
    onChangeValue(event.target.value, event.target.name);
  };

  const handleToggleEditOpen = (event) => {
    const elem = event.target.closest('li');
    const { id } = elem.dataset;
    const { comment } = elem.dataset;
    toggleEditComment();
    editCommentValue(comment);
    editCommentId(id);
  };

  const handleOnSubmitEdit = (event) => {
    event.preventDefault();
    if (handleValidation('edit')) {
      modifyComment();
      toggleEditComment();
    }
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
    <div className="Exploration__overview__left__comments animate__animated animate__fadeIn">
      <h3>Commentaires</h3>
      <ul className="Exploration__overview__left__comments__list">
        {comments.map((comment) => (
          <li key={comment.id} data-id={comment.id} data-comment={comment.content} className="Exploration__overview__left__comments__list__item">
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
            {((loggedUserId === comment.author_id) && !commentEditOpen)
            && (
            <div className="Exploration__overview__left__comments__list__item__icons">
              <FaPen
                className="Exploration__overview__left__comments__list__item__icons__elem"
                onClick={handleToggleEditOpen}
              />
              <ImCross
                className="Exploration__overview__left__comments__list__item__icons__elem"
                onClick={handleDelete}
              />
            </div>
            )}
          </li>
        ))}
      </ul>
      <form className="Exploration__overview__left__comments__form" onSubmit={commentEditOpen ? handleOnSubmitEdit : handleOnSubmit}>
        <span className="Exploration__overview__left__comments__form__edit">{commentFieldHasError.commentInput}</span>
        {commentEditOpen && <span className="Exploration__overview__left__comments__form__edit">Vous modifiez un commentaire...</span>}
        <div className="Exploration__overview__left__comments__form__elem">
          <input
            type="text"
            placeholder="Commenter"
            className="Exploration__overview__left__comments__form__elem__input input"
            onChange={handleChange}
            value={commentEditOpen ? commentEditInput : commentInput}
            name={commentEditOpen ? 'commentEdit' : 'comment'}
          />
          <button
            type="submit"
            className="Exploration__overview__left__comments__form__elem__button button --secondary"
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
  modifyComment: PropTypes.func.isRequired,
  commentInput: PropTypes.string.isRequired,
  commentEditInput: PropTypes.string.isRequired,
  commentEditOpen: PropTypes.bool.isRequired,
  toggleEditComment: PropTypes.func.isRequired,
  editCommentValue: PropTypes.func.isRequired,
  editCommentId: PropTypes.func.isRequired,
  loggedUserId: PropTypes.number.isRequired,
  commentFieldHasError: PropTypes.object,
  handleFieldHasError: PropTypes.func.isRequired,
};

Comments.defaultProps = {
  comments: [],
  onSubmit: {},
  onChangeValue: {},
  commentFieldHasError: {},
};

export default Comments;
