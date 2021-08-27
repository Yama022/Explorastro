import React, { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';

export const MouseContext = createContext({
  cursorType: '',
  cursorChangeHandler: () => {},
});

const MouseContextProvider = (props) => {
  const [cursorType, setCursorType] = useState('');

  const cursorChangeHandler = (cursorTypeParam) => {
    setCursorType(cursorTypeParam);
  };

  const { children } = props;

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
      }}
    >
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;

MouseContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
