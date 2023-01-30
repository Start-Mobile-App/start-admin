import React, { Component } from 'react';

AtomProgressBar.defaultProps = {
  classNameprogressBar: 'progressBar_default_style',
  classNameContainer_ProgressBar: 'container_ProgressBar_default_style',
  width: '0%',
  label: false
};

function AtomProgressBar (props) {
  return (
    <div className={props.classNameContainer_ProgressBar}>
      <div
        className={props.classNameprogressBar}
        style={{ width: props.width }}
      >
        {props.label ? props.width : null}
      </div>
    </div>
  );
}

export default AtomProgressBar;
