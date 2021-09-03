/* eslint-disable import/no-unresolved */
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { TextureLoader } from 'three';
import MoonTexture from 'src/assets/textures/moon_texture.jpg';

export default function Moon() {
  const [colorMap, normalMap, specularMap] = useLoader(
    TextureLoader,
    [MoonTexture],
  );

  const moonRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    moonRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />

      <mesh ref={moonRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls />
      </mesh>
    </>
  );
}
