/* eslint-disable */
import React, { useEffect, useState } from "react";
import Avatar, { genConfig } from "react-nice-avatar";
import { GiRollingDices } from "react-icons/gi";
import { GrRestroomWomen, GrRestroomMen } from "react-icons/gr";

const DEFAULT_STYLES = {
  sex: ["man", "woman"],
  faceColor: [
    "#f2eae9",
    "#e4d6d3",
    "#d7c1be",
    "#c9aea9",
    "#bc9a95",
    "#ae8781",
    "#8f6f6a",
    "#715855",
    "#544240",
    "#392e2c",
    "#1f1a19",
  ],
  earSize: ["small", "big"],
  hairStyle: ["normal", "thick", "mohawk", "womanLong", "womanShort"],
  hatStyle: ["none", "turban", "beanie"],
  eyeStyle: ["circle", "oval", "smile"],
  glassesStyle: ["none", "round", "square"],
  noseStyle: ["short", "long", "peace"],
  mouthStyle: ["laugh", "smile", "peace"],
  shirtStyle: ["hoody", "short", "polo"],
  shirtColor: [],
  hairColor: [],
  bgColor: [],
  hatColor: [],
  hairColorRandom: [],
};

export default function AvatarMaker() {
  const [styles, setStyles] = useState(genConfig());
  const [hairColor, setHairColor] = useState(styles.hairColor);

  const genNewConfig = (e) => {
    const el = e.target;
    const { type, value } = el.closest("button").dataset;
    console.log("data", type, value);
    const newStyles = genConfig({
      [type]: value,
    });
    updateColors(newStyles);
    setStyles(newStyles);
  };

  const updateColors = (newStyles) => {
    console.log("newStyles", newStyles);
    setHairColor(newStyles.hairColor);
  };

  const changeStyle = (e) => {
    const { type, value } = e.target.dataset;
    console.log("data", type, value);
    setStyles({
      ...styles,
      hairColorRandom: hairColor,
      [type]: value,
    });
  };

  return (
    <div className="avatar">
      <h1 className="title is-1">Créer votre avatar</h1>
      <Avatar style={{ width: "15rem", height: "15rem" }} {...styles} />
      <div className="choosers">
        <div className="chooser sex">
          <div className="title">
            <h2>Sexe</h2>
          </div>
          <div className="choices">
            <button
              className={
                styles.sex === "woman"
                  ? "button --secondary is"
                  : "button --secondary"
              }
              data-type="sex"
              data-value="woman"
              onClick={genNewConfig}
            >
              <span className="icon">
                <GrRestroomWomen />
              </span>
              <span>Femme</span>
            </button>
            <button
              className={
                styles.sex === "man"
                  ? "button --secondary is"
                  : "button --secondary"
              }
              data-type="sex"
              data-value="man"
              onClick={genNewConfig}
            >
              <span className="icon">
                <GrRestroomMen />
              </span>
              <span>Homme</span>
            </button>
            <button className="button --secondary" onClick={genNewConfig}>
              <span className="icon">
                <GiRollingDices />
              </span>
              <span>Aléatoire</span>
            </button>
          </div>
        </div>
        <div className="chooser faceColor">
          <div className="title">
            <h2>Couleur de la peau</h2>
          </div>
          <div className="choices">
            {DEFAULT_STYLES.faceColor.map((color, i) => (
              <button
                style={{ backgroundColor: color, border: "1px solid " + {} }}
                className={styles.faceColor === color ? "color is" : "color"}
                data-type="faceColor"
                data-value={color}
                onClick={changeStyle}
                key={i}
              ></button>
            ))}
          </div>
        </div>
        <div className="chooser earSize">
          <div className="title">
            <h2>Taille des oreilles</h2>
          </div>
          <div className="choices">
            <button
              className={
                styles.earSize === "small"
                  ? "button --secondary is"
                  : "button --secondary"
              }
              data-type="earSize"
              data-value="small"
              onClick={changeStyle}
            >
              Petites
            </button>
            <button
              className={
                styles.earSize === "big"
                  ? "button --secondary is"
                  : "button --secondary"
              }
              data-type="earSize"
              data-value="big"
              onClick={changeStyle}
            >
              Grandes
            </button>
          </div>
        </div>
        <div className="chooser hair"></div>
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
              styles.hairStyle === "normal"
                ? "button --secondary is"
                : "button --secondary"
            }
            data-type="hairStyle"
            data-value="normal"
            onClick={changeStyle}
          >
            Normaux
          </button>
          <button
            className={
              styles.hairStyle === "thick"
                ? "button --secondary is"
                : "button --secondary"
            }
            data-type="hairStyle"
            data-value="thick"
            onClick={changeStyle}
          >
            Épais
          </button>
          <button
            className={
              styles.hairStyle === "mohawk"
                ? "button --secondary is"
                : "button --secondary"
            }
            data-type="hairStyle"
            data-value="mohawk"
            onClick={changeStyle}
          >
            Crête Mohawk
          </button>
          <button
            className={
              styles.hairStyle === "womanLong"
                ? "button --secondary is"
                : "button --secondary"
            }
            data-type="hairStyle"
            data-value="womanLong"
            onClick={changeStyle}
          >
            Longs
          </button>
          <button
            className={
              styles.hairStyle === "womanShort"
                ? "button --secondary is"
                : "button --secondary"
            }
            data-type="hairStyle"
            data-value="womanShort"
            onClick={changeStyle}
          >
            Courts
          </button>
        </div>
      </div>
    </div>
  );
}
