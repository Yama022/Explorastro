/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ImSad } from 'react-icons/im';
import { TiArrowRight } from 'react-icons/ti';
import FirstPart from './FirstPart';

import data from './data';

// import { FcPrevious } from 'react-icons/fc';

export default function Visuel() {
  const { photo } = data[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Link to="/guide">
        Avant
      </Link>

      <div className="guide__paragraphe__two__paragraphe">
        <p>Comme mentionné dans le titre, on peut aussi utiliser une lunette ou un téléscope pour faire du visuel, même si cela commence déjà à coûter un peu plus chère.
          Le coût d'une lunette ou d'un téléscope va dépendre de votre budget et de ce que vous souhaiterez voir, car il n'existe pas (bien malheureusement) d'instrument
          qui fasse le meilleur des deux... <ImSad />
        </p>
        <p> <TiArrowRight /> <em>En tout 1er achat pour une lunette on peut partir sur ce type de lunette :</em> </p>

        {/* Création d'une div qui englobe les <figure> pour pouvoir flex en wrap dessus */}
        <div className="guide__paragraphe__two__paragraphe__figure">
          {photo.map((element) => (
            <FirstPart key={element.id} {...element} />
          ))}
        </div>

        <p> <TiArrowRight /> <em>Divers accessoires peuvent être utile lors de vos sorties tels que :</em> </p>
        <div className="guide__paragraphe__two__paragraphe__figure">
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/oculaires/5585-2005-oculaire-vixen-npl-coulant-3175mm.html#/8-focale-4_mm" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/14959-large_default/oculaire-vixen-npl-coulant-3175mm.jpg" alt="OCULAIRE VIXEN NPL COULANT 31,75MM" />
            </a>
            <figcaption className="exemple"> OCULAIRE VIXEN NPL COULANT 31,75MM - 42€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/oculaires/4478-1566-oculaires-explore-scientific-ler-52-argon.html#/7-focale-3_mm" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/8496-large_default/oculaires-explore-scientific-ler-52-argon.jpg" alt="EXPLORE SCIENTIFIC LER 52° ARGON" />
            </a>
            <figcaption className="exemple"> OCULAIRES EXPLORE SCIENTIFIC LER 52° ARGON - 75€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/oculaires/2850-566-oculaires-takahashi-le.html#/9-focale-5_mm" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/5342-large_default/oculaires-takahashi-le.jpg" alt="OCULAIRES TAKAHASHI LE" />
            </a>
            <figcaption className="exemple"> OCULAIRES TAKAHASHI LE - 234€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/oculaires/2141-6-oculaires-baader-hyperion.html#/9-focale-5_mm" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/4994-large_default/oculaires-baader-hyperion.jpg" alt="OCULAIRES BAADER HYPERION" />
            </a>
            <figcaption className="exemple"> OCULAIRES BAADER HYPERION - 145€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/barlow/4914-barlow-2x-kepler-o-3175mm.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/10762-large_default/barlow-2x-kepler-o-3175mm.jpg" alt="BARLOW 2X KEPLER Ø 31,75MM" />
            </a>
            <figcaption className="exemple"> BARLOW 2X KEPLER Ø 31,75MM - 38€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/barlow/810-barlow-3175-mm-2x-x-cel-lx-celestron-0050234935296.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/9705-large_default/barlow-3175-mm-2x-x-cel-lx-celestron.jpg" alt="BARLOW 31,75 MM 2X X-CEL LX CELESTRON" />
            </a>
            <figcaption className="exemple"> BARLOW 31,75 MM 2X X-CEL LX CELESTRON - 99€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/barlow/69-lentille-de-barlow-x2-tele-vue-o-3175-mm.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/6860-large_default/lentille-de-barlow-x2-tele-vue-o-3175-mm.jpg" alt="LENTILLE DE BARLOW X2 TELE VUE - Ø 31,75 MM" />
            </a>
            <figcaption className="exemple"> LENTILLE DE BARLOW X2 TELE VUE - Ø 31,75 MM - 130€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/renvois-coudes/731-renvoi-coude-en-3175-3664055002388.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/12110-large_default/renvoi-coude-en-3175.jpg" alt="RENVOI COUDÉ EN 31.75" />
            </a>
            <figcaption className="exemple"> RENVOI COUDÉ EN 31.75 - 40€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/renvois-coudes/4507-renvoi-coude-a-miroir-tele-vue-o-3175-mm.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/6860-large_default/lentille-de-barlow-x2-tele-vue-o-3175-mm.jpg" alt="RENVOI COUDÉ À MIROIR TELE VUE Ø 31,75 MM" />
            </a>
            <figcaption className="exemple"> RENVOI COUDÉ À MIROIR TELE VUE Ø 31,75 MM - 160€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/accessoiresoptiques/911-correcteurreducteur-sc-fd-63-celestron-0050234941754.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/14076-large_default/correcteurreducteur-sc-fd-63-celestron.jpg" alt="CORRECTEUR/RÉDUCTEUR SC F/D 6,3 CELESTRON" />
            </a>
            <figcaption className="exemple"> CORR/RÉDUCTEUR SC F/D 6,3 CELESTRON - 149€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/accessoiresoptiques/4317-correcteur-de-coma-newton-mpcc-mark-iii-baader.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/8068-large_default/correcteur-de-coma-newton-mpcc-mark-iii-baader.jpg" alt="CORRECTEUR DE COMA NEWTON MPCC MARK III BAADER" />
            </a>
            <figcaption className="exemple"> CORRECTEUR DE COMA NEWTON MPCC MARK III BAADER - 160€ </figcaption>
          </figure>
        </div>

        <p> <TiArrowRight /> <em>Si on souhaite partir sur du matériel plus moyen/haut de gamme, on peut partir sur ça :</em> </p>
        <div className="guide__paragraphe__two__paragraphe__figure">
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/telescopes-newton/2571-telescope-2001000-neq5-perl-bellatrix.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/3933-large_default/telescope-2001000-neq5-perl-bellatrix.jpg" alt="TÉLESCOPE 200/1000 NEQ5 PERL BELLATRIX" />
            </a>
            <figcaption className="exemple"> TÉLESCOPE 200/1000 NEQ5 PERL BELLATRIX - 695€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/telescopes-newton/5219-telescope-sky-watcher-2001000-dual-speed-sur-neq5-pro-go-to-bd-3664055000254.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/12522-large_default/telescope-sky-watcher-2001000-dual-speed-sur-neq5-pro-go-to-bd.jpg" alt="TÉLESCOPE 200/1000 NEQ5 PRO GO-TO" />
            </a>
            <figcaption className="exemple"> TÉLESCOPE SKY-WATCHER 200/1000 DUAL SPEED SUR NEQ5 PRO GO-TO BD - 1134€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/telescopes-newton/5618-telescope-sky-watcher-2001000-dual-speed-sur-eq6-r-pro-go-to-bd.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/15050-large_default/telescope-sky-watcher-2001000-dual-speed-sur-eq6-r-pro-go-to-bd.jpg" alt="TÉLESCOPE 200/1000 EQ6R PRO GO-TO" />
            </a>
            <figcaption className="exemple"> TÉLESCOPE SKY-WATCHER 200/1000 DUAL SPEED SUR EQ6-R PRO GO-TO BD - 1933€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/lunettes-apoed/582-lunette-astronomique-sky-watcher-80ed-tube-optique-3664055000988.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/12403-large_default/lunette-astronomique-sky-watcher-80ed-tube-optique.jpg" alt="LUNETTE SKY-WATCHER 80ED" />
            </a>
            <figcaption className="exemple"> LUNETTE ASTRONOMIQUE SKY-WATCHER 80ED (TUBE OPTIQUE) - 497€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/lunettes-apoed/1010-lunette-sky-watcher-esprit-80ed-3664055001046.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/12393-large_default/lunette-sky-watcher-esprit-80ed.jpg" alt="LUNETTE SKY-WATCHER ESPRIT 80ED" />
            </a>
            <figcaption className="exemple"> LUNETTE SKY-WATCHER ESPRIT 80ED - 1490€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/lunettes-apoed/2527-lunette-sky-watcher-esprit-100ed-3664055001053.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/12392-large_default/lunette-sky-watcher-esprit-100ed.jpg" alt="LUNETTE SKY-WATCHER ESPRIT 100ED" />
            </a>
            <figcaption className="exemple"> LUNETTE SKY-WATCHER ESPRIT 100ED - 2244€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/telescopes-compacts/930-630-tube-optique-seul-sc-800-fastar-celestron-8.html#/341-version_opt_monture_moteurs-platine_standard_vixen_sky_watcher" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/9917-large_default/tube-optique-seul-sc-800-fastar-celestron-8.jpg" alt="TUBE OPTIQUE SEUL SC 800 FASTAR CELESTRON 8" />
            </a>
            <figcaption className="exemple"> TUBE OPTIQUE SEUL SC 800 FASTAR CELESTRON 8 - 1199€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/telescopes-compacts/931-629-tube-optique-seul-sc-925-fastar-celestron-925.html#/342-version_opt_monture_moteurs-platine_large_losmandy_cge" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/9922-large_default/tube-optique-seul-sc-925-fastar-celestron-925.jpg" alt="TUBE OPTIQUE SEUL SC 925 FASTAR CELESTRON 9.25" />
            </a>
            <figcaption className="exemple"> TUBE OPTIQUE SEUL SC 925 FASTAR CELESTRON 9.25 - 1764€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/telescopes-compacts/1290-tube-optique-seul-sc-925-edgehd-celestron-0050234104098.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/9866-large_default/tube-optique-seul-sc-925-edgehd-celestron.jpg" alt="TUBE OPTIQUE SEUL SC 925 EDGEHD CELESTRON" />
            </a>
            <figcaption className="exemple"> TUBE OPTIQUE SEUL SC 925 EDGEHD CELESTRON - 3115€ </figcaption>
          </figure>
          <figure className="guide__paragraphe__two__paragraphe__elements">
            <a href="https://www.maison-astronomie.com/fr/telescopes-compacts/1291-tube-optique-seul-sc-1100-edgehd-celestron-0050234105095.html" target="_blank" rel="noreferrer">
              <img src="https://www.maison-astronomie.com/9871-large_default/tube-optique-seul-sc-1100-edgehd-celestron.jpg" alt="TUBE OPTIQUE SEUL SC 1100 EDGEHD CELESTRON" />
            </a>
            <figcaption className="exemple"> TUBE OPTIQUE SEUL SC 1100 EDGEHD CELESTRON - 4365€ </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
