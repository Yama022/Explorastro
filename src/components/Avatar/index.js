import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Avatar, { genConfig } from 'react-nice-avatar';
import domtoimage from 'dom-to-image';

import { FaLongArrowAltLeft } from 'react-icons/fa';
import { GiRollingDices } from 'react-icons/gi';
import { GrRestroomWomen, GrRestroomMen } from 'react-icons/gr';

// eslint-disable-next-line no-unused-vars
const DEFAULT_STYLES = {
  sex: ['man', 'woman'],
  earSize: ['small', 'big'],
  hairStyle: ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort'],
  hatStyle: ['none', 'turban', 'beanie'],
  eyeStyle: ['circle', 'oval', 'smile'],
  glassesStyle: ['none', 'round', 'square'],
  noseStyle: ['short', 'long', 'peace'],
  mouthStyle: ['laugh', 'smile', 'peace'],
  shirtStyle: ['hoody', 'short', 'polo'],
  faceColor: [],
  shirtColor: [],
  hairColor: [],
  bgColor: [],
  hatColor: [],
  hairColorRandom: [],
};

export default function AvatarMaker({ loggedUserId, handleAvatarUpload }) {
  const [styles, setStyles] = useState(genConfig());
  const [hairColor, setHairColor] = useState(styles.hairColor);
  const [faceColor, setFaceColor] = useState(styles.faceColor);
  const [hatColor, setHatColor] = useState(styles.hatColor);
  const [shirtColor, setShirtColor] = useState(styles.shirtColor);
  const [bgColor, setBgColor] = useState(styles.bgColor);

  const updateColors = (newStyles) => {
    setHairColor(newStyles.hairColor);
    setFaceColor(newStyles.faceColor);
    setHatColor(newStyles.hatColor);
    setShirtColor(newStyles.shirtColor);
    setBgColor(newStyles.bgColor);
  };

  const changeStyle = (e) => {
    const { type, value } = e.target.dataset;
    setStyles({
      ...styles,
      hairColorRandom: hairColor,
      [type]: value,
    });
  };

  const genNewConfig = (e) => {
    const el = e.target;
    const { type, value } = el.closest('button').dataset;
    const newStyles = genConfig({
      [type]: value,
    });
    updateColors(newStyles);
    setStyles(newStyles);
  };

  const download = async () => {
    const scale = 2;
    const node = document.getElementById('preview');

    const blobToImage = (blob) => {
      blob.name = 'avatar.jpeg';
      blob.lastModified = new Date();
      const myFile = new File([blob], 'avatar.jpeg', {
        type: blob.type,
      });
      return myFile;
    };

    if (node) {
      const blob = await domtoimage.toBlob(node, {
        height: node.offsetHeight * scale,
        style: {
          transform: `scale(${scale}) translate(${node.offsetWidth / 2 / scale}px, ${node.offsetHeight / 2 / scale}px)`,
          'border-radius': 0,
        },
        width: node.offsetWidth * scale,
      });
      const avatarFile = blobToImage(blob);
      await handleAvatarUpload(avatarFile);
      // eslint-disable-next-line no-console
    }
  };

  return (
    <div className="avatar">
      <div className="avatar__preview">
        <Link className="button --secondary" to={`/profile/${loggedUserId}`}>
          <span className="icon is-small">
            <FaLongArrowAltLeft />
          </span>
          <span> Retour </span>
        </Link>
        <div className="avatar__preview__container">
          <h1 className="title is-1">Créer votre avatar</h1>
          <Avatar id="preview" {...styles} />
        </div>
      </div>
      <div className="choosers">
        <div className="chooser bgColor">
          <div className="title">
            <h2>
              Background
              <input
                type="color"
                data-type="bgColor"
                data-value={bgColor}
                value={bgColor}
                onChange={(e) => {
                  setBgColor(e.target.value);
                  changeStyle(e);
                }}
              />
            </h2>
          </div>
        </div>
        <div className="chooser faceColor">
          <div className="title">
            <h2>
              Couleur de la peau
              <input
                type="color"
                data-type="faceColor"
                data-value={faceColor}
                value={faceColor}
                onChange={(e) => {
                  setFaceColor(e.target.value);
                  changeStyle(e);
                }}
              />
            </h2>
          </div>
        </div>
        <div className="chooser sex">
          <div className="title">
            <h2>Sexe</h2>
          </div>
          <div className="choices">
            <button
              className={
                styles.sex === 'woman'
                  ? 'button --secondary is'
                  : 'button --secondary'
              }
              data-type="sex"
              data-value="woman"
              onClick={genNewConfig}
              type="button"
            >
              <span className="icon">
                <GrRestroomWomen />
              </span>
              <span>Femme</span>
            </button>
            <button
              className={
                styles.sex === 'man'
                  ? 'button --secondary is'
                  : 'button --secondary'
              }
              data-type="sex"
              data-value="man"
              onClick={genNewConfig}
              type="button"
            >
              <span className="icon">
                <GrRestroomMen />
              </span>
              <span>Homme</span>
            </button>
            <button className="button --secondary" onClick={genNewConfig} type="button">
              <span className="icon">
                <GiRollingDices />
              </span>
              <span>Aléatoire</span>
            </button>
          </div>
        </div>
        <div className="chooser earSize">
          <div className="title">
            <h2>Taille des oreilles</h2>
          </div>
          <div className="choices">
            <button
              className={
                styles.earSize === 'small'
                  ? 'button --secondary is'
                  : 'button --secondary'
              }
              data-type="earSize"
              data-value="small"
              onClick={changeStyle}
              type="button"
            >
              Petites
            </button>
            <button
              className={
                styles.earSize === 'big'
                  ? 'button --secondary is'
                  : 'button --secondary'
              }
              data-type="earSize"
              data-value="big"
              onClick={changeStyle}
              type="button"
            >
              Grandes
            </button>
          </div>
        </div>
        <div className="chooser hair">
          <div className="title">
            <h2>Cheveux</h2>
            <input
              type="color"
              data-type="hairColor"
              data-value={hairColor}
              value={hairColor}
              onChange={(e) => {
                setHairColor(e.target.value);
                changeStyle(e);
              }}
            />
          </div>
          <div className="choices">
            <button
              className={
            styles.hairStyle === 'normal'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="hairStyle"
              data-value="normal"
              onClick={changeStyle}
              type="button"
            >
              Normaux
            </button>
            <button
              className={
            styles.hairStyle === 'thick'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="hairStyle"
              data-value="thick"
              onClick={changeStyle}
              type="button"
            >
              Épais
            </button>
            <button
              className={
            styles.hairStyle === 'mohawk'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="hairStyle"
              data-value="mohawk"
              onClick={changeStyle}
              type="button"
            >
              Crête Mohawk
            </button>
            <button
              className={
            styles.hairStyle === 'womanLong'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="hairStyle"
              data-value="womanLong"
              onClick={changeStyle}
              type="button"
            >
              Longs
            </button>
            <button
              className={
            styles.hairStyle === 'womanShort'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="hairStyle"
              data-value="womanShort"
              onClick={changeStyle}
              type="button"
            >
              Courts
            </button>
          </div>
        </div>
        <div className="chooser hat">
          <div className="title">
            <h2>Chapeau</h2>
            <input
              type="color"
              data-type="hatColor"
              data-value={hatColor}
              value={hatColor}
              onChange={(e) => {
                setHatColor(e.target.value);
                changeStyle(e);
              }}
            />
          </div>
          <div className="choices">
            <button
              className={
              styles.hatStyle === 'none'
                ? 'button --secondary is'
                : 'button --secondary'
            }
              data-type="hatStyle"
              data-value="none"
              onClick={changeStyle}
              type="button"
            >
              Aucun
            </button>
            <button
              className={
            styles.hatStyle === 'turban'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="hatStyle"
              data-value="turban"
              onClick={changeStyle}
              type="button"
            >
              Turban
            </button>
            <button
              className={
            styles.hatStyle === 'beanie'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="hatStyle"
              data-value="beanie"
              onClick={changeStyle}
              type="button"
            >
              Bonnet
            </button>
          </div>
        </div>
        <div className="chooser eye">
          <div className="title">
            <h2>Yeux</h2>
          </div>
          <div className="choices">
            <button
              className={
              styles.eyeStyle === 'circle'
                ? 'button --secondary is'
                : 'button --secondary'
            }
              data-type="eyeStyle"
              data-value="circle"
              onClick={changeStyle}
              type="button"
            >
              Rond
            </button>
            <button
              className={
            styles.eyeStyle === 'oval'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="eyeStyle"
              data-value="oval"
              onClick={changeStyle}
              type="button"
            >
              Ovale
            </button>
            <button
              className={
            styles.eyeStyle === 'smile'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="eyeStyle"
              data-value="smile"
              onClick={changeStyle}
              type="button"
            >
              Souriant
            </button>
          </div>
        </div>
        <div className="chooser glasses">
          <div className="title">
            <h2>Lunettes</h2>
          </div>
          <div className="choices">
            <button
              className={
            styles.glassesStyle === 'none'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="glassesStyle"
              data-value="none"
              onClick={changeStyle}
              type="button"
            >
              Aucun
            </button>
            <button
              className={
          styles.glassesStyle === 'round'
            ? 'button --secondary is'
            : 'button --secondary'
        }
              data-type="glassesStyle"
              data-value="round"
              onClick={changeStyle}
              type="button"
            >
              Rondes
            </button>
            <button
              className={
          styles.glassesStyle === 'square'
            ? 'button --secondary is'
            : 'button --secondary'
        }
              data-type="glassesStyle"
              data-value="square"
              onClick={changeStyle}
              type="button"
            >
              Carrées
            </button>
          </div>
        </div>
        <div className="chooser nose">
          <div className="title">
            <h2>Nez</h2>
          </div>
          <div className="choices">
            <button
              className={
            styles.noseStyle === 'short'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="noseStyle"
              data-value="short"
              onClick={changeStyle}
              type="button"
            >
              Petit
            </button>
            <button
              className={
          styles.noseStyle === 'long'
            ? 'button --secondary is'
            : 'button --secondary'
        }
              data-type="noseStyle"
              data-value="long"
              onClick={changeStyle}
              type="button"
            >
              Long
            </button>
            <button
              className={
          styles.noseStyle === 'peace'
            ? 'button --secondary is'
            : 'button --secondary'
        }
              data-type="noseStyle"
              data-value="peace"
              onClick={changeStyle}
              type="button"
            >
              Paix
            </button>
          </div>
        </div>
        <div className="chooser mouth">
          <div className="title">
            <h2>Bouche</h2>
          </div>
          <div className="choices">
            <button
              className={
            styles.mouthStyle === 'laugh'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="mouthStyle"
              data-value="laugh"
              onClick={changeStyle}
              type="button"
            >
              Rire
            </button>
            <button
              className={
          styles.mouthStyle === 'smile'
            ? 'button --secondary is'
            : 'button --secondary'
        }
              data-type="mouthStyle"
              data-value="smile"
              onClick={changeStyle}
              type="button"
            >
              Souriant
            </button>
            <button
              className={
          styles.mouthStyle === 'peace'
            ? 'button --secondary is'
            : 'button --secondary'
        }
              data-type="mouthStyle"
              data-value="peace"
              onClick={changeStyle}
              type="button"
            >
              Paix
            </button>
          </div>
        </div>
        <div className="chooser mouth">
          <div className="title">
            <h2>Vêtements</h2>
            <input
              type="color"
              data-type="shirtColor"
              data-value={shirtColor}
              value={shirtColor}
              onChange={(e) => {
                setShirtColor(e.target.value);
                changeStyle(e);
              }}
            />
          </div>
          <div className="choices">
            <button
              className={
            styles.shirtStyle === 'hoody'
              ? 'button --secondary is'
              : 'button --secondary'
          }
              data-type="shirtStyle"
              data-value="hoody"
              onClick={changeStyle}
              type="button"
            >
              Pull
            </button>
            <button
              className={
          styles.shirtStyle === 'short'
            ? 'button --secondary is'
            : 'button --secondary'
        }
              data-type="shirtStyle"
              data-value="short"
              onClick={changeStyle}
              type="button"
            >
              T-Shirt
            </button>
            <button
              className={
          styles.shirtStyle === 'polo'
            ? 'button --secondary is'
            : 'button --secondary'
        }
              data-type="shirtStyle"
              data-value="polo"
              onClick={changeStyle}
              type="button"
            >
              Polo
            </button>
          </div>
        </div>
        <div className="choosers__save">
          <button type="button" className="button --outlined" onClick={download}>
            Sauvegarder
          </button>
        </div>
      </div>
    </div>
  );
}

AvatarMaker.propTypes = {
  loggedUserId: PropTypes.number.isRequired,
  handleAvatarUpload: PropTypes.func.isRequired,
};
