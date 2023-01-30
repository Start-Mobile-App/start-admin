import React, { Component } from 'react';

AtomLoader.defaultProps = {
  classNameLoader: 'loader-style'
};

function AtomLoader (props) {
  return <div className={props.classNameLoader}></div>;
}

export default AtomLoader;
