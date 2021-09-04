import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { BiHome } from 'react-icons/bi';

import astrocharles from 'src/assets/images/mascot/mascot-moon.svg';

import Mars from './Mars';

export default function Error() {
  return (
    <div className="error">
      <Canvas className="mars-model">
        <Suspense fallback={null}>
          <Mars />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
      <div className="error__content">
        <div className="error__content__404">
          <h2 className="animate__animated animate__fadeInDown">4</h2>
          <img className="error__content__404__astrocharles" src={astrocharles} alt="Astrocharles allongé sur la lune." />
          <h2 className="animate__animated animate__fadeInDown">4</h2>
        </div>
        <p className="animate__animated animate__fadeInLeft">Vous vous êtes perdu dans l'espace...</p>
        <Link to="/" type="button" className="button purple  animate__animated animate__fadeInRight">
          <span className="icon">
            <BiHome />
          </span>
          <span>
            Retourner à l'accueil
          </span>
        </Link>
      </div>
    </div>
  );
}
