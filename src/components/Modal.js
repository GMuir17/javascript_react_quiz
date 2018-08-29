import React from 'react';

const Modal = function(props) {
  if (props.result) {
    return (
      <div className='result-modal'>
        <h3>True</h3>
        <button name="page-refresh" onClick = {props.pageRefresh} > More Questions</button>
      </div>
    )
  }
  else {
    return (
      <div className='result-modal'>
        <h3>False</h3>
      </div>
    )
  }
};

export default Modal;
