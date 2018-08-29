import React from 'react';
import QuestionDetail from '../components/QuestionDetail.js';
import AnswerSubmit from '../components/AnswerSubmit.js';
import AnswerOptions from '../components/AnswerOptions.js';
import Result from '../components/Result.js';
import Modal from '../components/Modal.js';

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answers: [],
      correctAnswer: null,
      result: null,
      answered: false
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  };

  componentDidMount() {
    const url = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple';
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const incorrectAnswers = data.results[0].incorrect_answers;
      const rightAnswer = data.results[0].correct_answer;
      const allAnswers = incorrectAnswers.push(rightAnswer);

      this.setState({
        question: data.results[0].question,
        answers: incorrectAnswers,
        correctAnswer: data.results[0].correct_answer
      });
    })
    .catch((err) => {
      console.error(err);
    });
  };

  handleAnswerSelected(index) {
    this.setState({
      answered:true
    });

    if (this.state.answers[index] === this.state.correctAnswer) {
      this.setState({
        result: true
      })
    }
    else {
      this.setState({
        result:false
      })
    }
  };

  render() {
    let optionalRenderableModal = null;
    if (this.state.answered) {
      optionalRenderableModal = <Modal result= {this.state.result}/>
    }
    return (
      <div className ="question-container">
        {optionalRenderableModal}
        <QuestionDetail
          question= {this.state.question}
        />

        <AnswerOptions
          answers ={this.state.answers}
          onAnswerSelected={this.handleAnswerSelected}
        />

        <Result
            result= {this.state.result}
        />

      </div>
    );
  }
};

export default QuestionContainer;
