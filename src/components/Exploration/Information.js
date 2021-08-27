import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Loader from 'src/components/Loader';

const Information = ({ information }) => {
  if (!information.author) {
    return (<Loader />);
  }

  return (

    <div className="Exploration__main__informations animate__animated animate__fadeIn">
      <div className="Exploration__main__informations__general">
        <div className="Exploration__main__informations__general__left">
          <div>
            <h2>{information.name}</h2>
            <p>{`créé par ${information.author.username}`}</p>
            <div className="Exploration__main__informations__general__left__title__stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div>
          <img
            src="https://img.20mn.fr/r4hnPca8RRWkXhjG7q86mA/768x492_galaxie.jpg"
            alt=""
            className="Exploration__main__informations__general__illustration"
          />
        </div>
        <div className="Exploration__main__informations__general__right">
          <h2>Informations</h2>
          <p>
            {information.description ? information.description : '' }
          </p>
          <button type="button" className="button --secondary">
            Participer
          </button>
        </div>
      </div>
    </div>

  );
};
export default Information;

Information.propTypes = {
  information: PropTypes.object.isRequired,

};
