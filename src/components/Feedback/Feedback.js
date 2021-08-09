import React from "react";
import "./Feedback.css";
import classNames from "classnames";

const Feedback = ({
  shouldDisplay = false,
  isSuccess = false,
  successMessage = "Correct!",
  failureMessage = "Sorry!",
  isFinished = false,
  handleNextButtonClick = () => {},
}) => {
  const getMessage = () => {
    if (isSuccess) {
      return successMessage;
    }

    return failureMessage;
  };

  if (shouldDisplay) {
    return (
      <div
        className={classNames("feedback-container", {
          "feedback-only": isFinished,
        })}
      >
        <div
          className={classNames("feedback-message", {
            "success-message": isSuccess,
            "failure-message": !isSuccess,
          })}
        >
          {getMessage()}
        </div>
        {!isFinished && (
          <div className="center-cell">
            <button className="next-btn" onClick={handleNextButtonClick}>
              <span>
                Next &nbsp;
                <i className="fas fa-arrow-right" />
              </span>
            </button>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default Feedback;
