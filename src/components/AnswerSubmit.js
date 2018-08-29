import React from 'react';

const AnswerSubmit = function(props) {
  if (!props.correctAnswer) return null;

  return (
    <div>
      <input type='submit' name='Submit'></input>
    </div>
  )
};

export default AnswerSubmit;
