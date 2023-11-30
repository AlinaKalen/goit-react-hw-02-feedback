import React, { Component } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  render() {
    return (
      <div>
        <h1>Feedback App</h1>
        <Section title="Give Feedback">
          {Object.values(this.state).reduce((acc, val) => acc + val, 0) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <>
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback} />
              <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} />
            </>
          )}
        </Section>
      </div>
    );
  }

  handleFeedback = type => {
    this.setState(prevState => ({ [type]: prevState[type] + 1 }));
  };
}

export default App;
