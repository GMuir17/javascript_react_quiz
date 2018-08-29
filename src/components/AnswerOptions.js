import React from 'react';

const AnswerOptions = function (props) {
  if(props.answers.length === 0) return null;
  const radios =  props.answers.map((answer, index) => {
    return (
      <label key={index}>
        <p className='answer-text'>{answer}</p>
        <input
          type='radio'
          name='answers'
          id={index}
          value={index}
          onChange={handleSelect}
          key = {index}
        >
        </input>
      </label>
    )
  })

  function handleSelect(evt) {
    props.onAnswerSelected(evt.target.value);
  }

  return (
    <div>
      {radios}
    </div>
  )
};

export default AnswerOptions;
