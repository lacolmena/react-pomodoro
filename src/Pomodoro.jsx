import React from 'react';
import ReactDOM from 'react-dom';
import PomodoroControl from './PomodoroControl';
import BreakControl from './BreakControl';
import Timer from './Timer';

const Pomodoro = React.createClass({
    getInitialState: function() {
        return {
            time: 25,
            breakTime: 5
        }
    },
    incrementTime: function() {
        this.setState({
            time: this.state.time + 1
        })
    },
    decrementTime: function() {
        if (this.state.time > 0) {
            this.setState({
                time: this.state.time - 1
            })
        }
    },
    incrementBreakTime: function() {
        this.setState({
            breakTime: this.state.breakTime + 1
        })
    },
    decrementBreakTime: function() {
        if (this.state.breakTime > 0) {
            this.setState({
                breakTime: this.state.breakTime - 1
            })
        }
    },
    render: function() {
        return(
            <div>
                <PomodoroControl time={this.state.time}/>
                <button type='button' onClick={this.decrementTime} disabled={this.state.time === 0}>-</button>
                <button type='button' onClick={this.incrementTime}>+</button>
                <BreakControl breakTime={this.state.breakTime}/>
                <button type='button' onClick={this.decrementBreakTime} disabled={this.state.breakTime === 0}>-</button>
                <button type='button' onClick={this.incrementBreakTime}>+</button>
                <Timer time={this.state.time}/>
            </div>
        )
    }
})

export default Pomodoro;