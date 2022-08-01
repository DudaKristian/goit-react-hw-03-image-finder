import React from "react";  
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Statistics from "components/Statistics/Statistics";
import Notification from "components/Notifications/Notification";
import Section from "components/Section/Section";

class Counter extends React.Component{

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    feedback = e => {
        
        const name = e.target.textContent.toLowerCase();
        this.setState(prevState => {
           
            return {
            [name]: prevState[name] + 1,
            };
        });
        
    }

    countTotalFeedback = () => {
        const total = Object.values(this.state);
        return total.reduce((acc, value) => acc + value);
    }

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

    render() {

        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                    options = {Object.keys(this.state)}
                    onLeaveFeedback={this.feedback}
                    />
                    
                </Section>
            

                
                <Section title = "Statistics">
                {total ? (
                    < Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={total}
                    positivePercentage={positivePercentage}
                />) : 
                    ( <Notification 
                        message = "There is no feedback"
                        />)}
                </Section>
            </>
        )
    }
}




export default Counter;