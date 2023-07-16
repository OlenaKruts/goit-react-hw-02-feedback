import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
export class Feedback extends React.Component {
  state = {
    good: 15,
    neutral: 5,
    bad: 5,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;
    const countPositiveFeedbackPercentage =
      (this.state.good / countTotalFeedback) * 100;

    return (
      <>
        <div className="container__buttons">
          <h2 className="title">Please leave feedback</h2>
          <button
            type="button"
            className="button"
            onClick={this.handleIncrementGood}
          >
            Good
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleIncrementNeutral}
          >
            Neutral
          </button>
          <button
            type="button"
            className="button"
            onClick={this.handleIncrementBad}
          >
            Bad
          </button>
        </div>

        {/* <FeedbackOptions 
        options={this.state} 
        onLeaveFeedback={}/> */}

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}
