// jshint esversion:6

import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', height: '793px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
