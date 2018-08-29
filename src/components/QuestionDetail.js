import React from 'react';

const QuestionDetail = function (props) {
  if(!props.question) return null;

  return (
    <div>
      <h3>{props.question}</h3>
    </div>

  )
}

export default QuestionDetail;
