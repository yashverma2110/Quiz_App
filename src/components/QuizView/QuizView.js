import React from "react";
import QUESTIONS from "../../assets/data/quiz_questions.json";
import classnames from "classnames";

const QuizView = ({
  currQuestion = 0,
  userSelection = null,
  handleSelectionOfOption,
}) => {
  return (
    <>
      <div className="question-container">
        <div className="question">{QUESTIONS[currQuestion]?.title}</div>
        <div className="options-container">
          {QUESTIONS[currQuestion]?.options.map((option, index) => {
            return (
              <button
                key={index}
                className={classnames("option", {
                  "correct-option": index === userSelection?.correct,
                  "wrong-option": index === userSelection?.chosen,
                })}
                onClick={() => handleSelectionOfOption(index)}
                disabled={userSelection !== null}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default QuizView;
