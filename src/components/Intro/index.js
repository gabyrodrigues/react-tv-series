import React from 'react';

const Intro = (props) => (
    <p className="App-intro">
      {/* Our first functional component */}
      {props.message}
    </p>
);

export default Intro;