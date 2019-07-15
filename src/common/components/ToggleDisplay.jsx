import React from 'react';

const Toggledisplay = ({ show, children }) => {
  const displayStyle = {
    display: show ? undefined : 'none',
  };

  return <span style={displayStyle}>{children}</span>;
};

export default Toggledisplay;
