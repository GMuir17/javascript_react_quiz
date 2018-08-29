import React from 'react';

const AnswerOptions = function (props) {
  if(props.answers.length === 0) return null;
  const radios =  props.answers.map((answer, index) => {
    return (
      <label>
        <p className='answer-text'>{answer}</p>
        <input type='radio' name='answers' id={index} value={index}></input>
      </label>
    )
  })

  return (
    <div>
      {radios}
    </div>
  )

}

export default AnswerOptions;
