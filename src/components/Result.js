import React from 'react';

const Result = function (props){
  if(!props.result) return null;
    if (props.result === true){
    return <p>well done!</p>
  }

}
export default Result;
