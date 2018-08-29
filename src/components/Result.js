import React from 'react';

const Result = function (props){
  if(props.result === null) return null;

   if (props.result === true){
    return <p>well done!</p>
  }
  else {
    return <p> Incorrect! Try Again </p>
  }

}
export default Result;
