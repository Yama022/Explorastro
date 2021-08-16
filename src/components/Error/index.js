import React from 'react';

import mascotRocket from 'src/assets/images/mascot-rocket.svg';

export default function Error() {
  return (
    <div className="error">
      {/* Temporary error page, waiting for Theo's 404 */}
      <h1 className="main-title">Page not Found</h1>
      <img src={mascotRocket} alt="Temp 404 mascot" />
    </div>
  );
}
