import React from "react";
import "./Feedback.css";
import classNames from "classnames";

const Feedback = ({
  shouldDisplay = false,
  isSuccess = false,
  successMessage = "Correct!",
  failureMessage = "Sorry!",
  disableNext = false,
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
      <div className="feedback-container">
        <div
          className={classNames("feedback-message", {
            "success-message": isSuccess,
            "failure-message": !isSuccess,
          })}
        >
          {getMessage()}
        </div>
        <div>
          <button
            className="next-btn"
            onClick={handleNextButtonClick}
            disabled={disableNext}
          >
            <span>
              Next &nbsp;
              <i className="fas fa-arrow-right" />
            </span>
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default Feedback;
