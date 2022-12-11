import { useState } from 'react';
import questions from './questions';
import StartBtn from './components/StartBtn';
import Quiz from './components/Quiz';
import Score from './components/Score';

function App() {
  const [start, setStart] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questionList = questions;
 
  function startQuiz() {
    setStart(true);
  }

  function answerSelect(userChoice) {
    if (userChoice === true) {
     setScore(score + 1);
    }

    const nextQuestion = questionIndex + 1;
    if (nextQuestion < questions.length) {
      setQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  function restart() {
    setShowScore(false);
    setStart(false);
    setQuestionIndex(0);
    setScore(0);
  }

  if (showScore === true) {
    return ( 
      <div>
       <Score score={score} questionList={questionList} restart={restart}/>
      </div>
    )
  }

  return (
    <div className="App">
      {start === false ? 
      <StartBtn startQuiz={startQuiz} /> : 
      <Quiz questionList={questionList} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex} answerSelect={answerSelect}/>}
    </div>
  );
}

export default App;
