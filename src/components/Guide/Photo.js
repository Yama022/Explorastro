import React from 'react';
import Figure from './Figure';

import data from './Visuel/data';

export default function Photo() {
  // console.log('Data', data[0]);
  const { photo } = data[0];
  // console.log('photo', photo);
  return (
    <div className="toto">
      {photo.map((element) => (
        <Figure key={element.id} {...element} />
      ))}
    </div>
  );
}
