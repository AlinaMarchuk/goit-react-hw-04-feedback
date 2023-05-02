import React, { Fragment } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = respond => {
    this.setState(prevState => ({
      [respond]: prevState[respond] + 1,
    }));
  };

  countTotalFeedback = state => {
    const values = Object.values(state);
    return values.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = (state, total) =>
    Number.parseInt((state.good / total) * 100);

  render() {
    const options = Object.keys(this.state);
    return (
      <Fragment>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onClick}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback(this.state) ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state,
                this.countTotalFeedback(this.state)
              )}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </Fragment>
    );
  }
}

export default Feedback;
