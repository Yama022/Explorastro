/* eslint-disable max-len */
import React, { useEffect } from 'react';
import BackButton from 'src/components/BackButton';

import { ImSad } from 'react-icons/im';
import { TiArrowRight } from 'react-icons/ti';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';
import ThirdPart from './ThirdPart';

import data from './data';

export default function Visuel() {
  const { first_paragraphe: firstParagraphe } = data[0];
  const { second_paragraphe: secondParagraphe } = data[0];
  const { third_paragraphe: thirdParagraphe } = data[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <div className="guide">

    <BackButton />

      <div className="guide__section">
        <div className="guide__section__paragraphe">
          <p>Comme mentionné dans le titre, on peut aussi utiliser une lunette ou un téléscope pour faire du visuel, même si cela commence déjà à coûter un peu plus chère.
            Le coût d'une lunette ou d'un téléscope va dépendre de votre budget et de ce que vous souhaiterez voir, car il n'existe pas (bien malheureusement) d'instrument
            qui fasse le meilleur des deux... <ImSad />
          </p>
          <p> <TiArrowRight /> <em>En tout 1er achat pour une lunette on peut partir sur ce type de lunette :</em> </p>

          {/* Création d'une div qui englobe les <figure> pour pouvoir flex en wrap dessus */}
          <div className="guide__section__paragraphe__images">
            {firstParagraphe.map((element) => (
              <FirstPart key={element.id} {...element} />
            ))}
          </div>

          <p> <TiArrowRight /> <em>Divers accessoires peuvent être utile lors de vos sorties tels que :</em> </p>
          <div className="guide__section__paragraphe__images">
            {secondParagraphe.map((element) => (
              <SecondPart key={element.id} {...element} />
            ))}
          </div>

          <p> <TiArrowRight /> <em>Si on souhaite partir sur du matériel plus moyen/haut de gamme, on peut partir sur ça :</em> </p>
          <div className="guide__section__paragraphe__images">
            {thirdParagraphe.map((element) => (
              <ThirdPart key={element.id} {...element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
