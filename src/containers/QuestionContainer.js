import React from 'react';
import QuestionDetail from '../components/QuestionDetail.js';
import AnswerOptions from '../components/AnswerOptions.js';
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
    this.restartQuestions = this.restartQuestions.bind(this);
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
        answers: this.shuffleAnswers(incorrectAnswers),
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

  shuffleAnswers(array) {
    for (let i = array.length -1; i >= 0; i--){
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = array[randomIndex];
      array[randomIndex] = array[i]
      array[i] = itemAtIndex
    }
    return array;
  }

  restartQuestions(){
    window.location.reload();

  }

  render() {
    let optionalRenderableModal = null;
    if (this.state.answered) {
      optionalRenderableModal = <Modal result= {this.state.result} pageRefresh = {this.restartQuestions}/>
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
      </div>
    );
  }
};

export default QuestionContainer;
