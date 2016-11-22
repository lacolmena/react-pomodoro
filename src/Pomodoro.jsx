import React from 'react';
import ReactDOM from 'react-dom';
import PomodoroControl from './PomodoroControl';
import BreakControl from './BreakControl';
import Timer from './Timer';

const Pomodoro = React.createClass({
    getInitialState: function() {
        return {
            time: 3,
            breakTime: 1,
            showPomodoroTimer: true,
            showBreakTimer: false
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
    onClockToggle: function(clockId) {
        if(clockId === 'BREAK_TIMER') {
            this.refs.pomodoroTimer.startTimer();
        } else if (clockId === 'POMODORO_TIMER') {
            this.refs.breakTimer.startTimer();
        }
        this.toggleTimerShown();
    },
    toggleTimerShown: function() {
        this.setState({
            showPomodoroTimer: !this.state.showPomodoroTimer,
            showBreakTimer: !this.state.showBreakTimer
        })
    },
    resetTimer: function(clockId) {   
        if(clockId === 'BREAK_TIMER') {     
            this.refs.breakTimer.resetTimer();
            this.refs.pomodoroTimer.resetTimer();
            this.toggleTimerShown();
        } else if (clockId === 'POMODORO_TIMER') {
            this.refs.pomodoroTimer.resetTimer();
        }
    },
    render: function() {
        return(
            <div>
                <PomodoroControl time={this.state.time}/>
                <button type='button' onClick={this.decrementTime} disabled={this.state.time === 1}>-</button>
                <button type='button' onClick={this.incrementTime}>+</button>
                <BreakControl breakTime={this.state.breakTime}/>
                <button type='button' onClick={this.decrementBreakTime} disabled={this.state.breakTime === 1}>-</button>
                <button type='button' onClick={this.incrementBreakTime}>+</button>
                <Timer ref='pomodoroTimer' 
                    onToggle={this.onClockToggle}
                    resetTimer={this.resetTimer}
                    time={this.state.time} 
                    timerType={'POMODORO_TIMER'}
                    showPomodoroTimer={this.state.showPomodoroTimer}/>
                <Timer ref='breakTimer' 
                    onToggle={this.onClockToggle} 
                    resetTimer={this.resetTimer}
                    time={this.state.breakTime} 
                    timerType={'BREAK_TIMER'}
                    showBreakTimer={this.state.showBreakTimer}/>
            </div>
        )
    }
})

export default Pomodoro;