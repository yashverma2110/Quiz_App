import { useState } from "react";
import "./assets/css/App.css";
import QUESTIONS from "./assets/data/quiz_questions.json";
import Header from "./components/Header/Header";
import Feedback from "./components/Feedback/Feedback";
import QuizView from "./components/QuizView/QuizView";

function App() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [userSelection, setUserSelection] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelectionOfOption = (index) => {
    const userSelectionProps = {
      chosen: index,
      correct: QUESTIONS[currQuestion].options.indexOf(
        QUESTIONS[currQuestion].correct_answer
      ),
    };

    if (userSelectionProps.chosen === userSelectionProps.correct) {
      setCorrectCount(correctCount + 1);
    }

    if (currQuestion === QUESTIONS.length - 1) {
      setFinished(true);
    }

    setUserSelection(userSelectionProps);
  };

  const nextQuestionHandler = () => {
    if (currQuestion + 1 < QUESTIONS.length) {
      setUserSelection(null);
      setCurrQuestion(currQuestion + 1);
    }
  };

  const getMessage = () => {
    if (finished) {
      return `GAME OVER!`;
    }

    if (currQuestion <= QUESTIONS.length - 1) {
      return `QUESTION ${currQuestion + 1}`;
    }
  };

  return (
    <div className="App">
      <Header
        title={getMessage()}
        progress={correctCount}
        total={currQuestion + 1}
      />
      <QuizView
        key={currQuestion}
        currQuestion={currQuestion}
        userSelection={userSelection}
        handleSelectionOfOption={handleSelectionOfOption}
      />
      <Feedback
        shouldDisplay={userSelection !== null}
        isSuccess={userSelection?.chosen === userSelection?.correct}
        handleNextButtonClick={nextQuestionHandler}
        disableNext={finished}
      />
    </div>
  );
}

export default App;
