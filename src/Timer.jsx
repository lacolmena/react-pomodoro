import React from 'react';
import ReactDOM from 'react-dom';

const Timer = React.createClass({
    getInitialState: function() {
        return {
            minutes: this.props.time,
            seconds: 0,
            timerRunning: false,
            timer: null,
            timerType: this.props.timerType
        }
    },
    startTimer: function() {
        this.setState({
            minutes: this.props.time,
            seconds: 0,
            timerRunning: true,
            timer: setInterval(function(){
                if (this.state.seconds === 0 && this.state.minutes === 0) {
                    this.onToggle(this.state.timerType);
                    this.stopTimer();
                } else {
                    if (this.state.seconds === 0) {
                        this.setState({
                            minutes: this.state.minutes - 1,
                            seconds: 59
                        });
                    } else {
                        this.setState({
                            seconds: this.state.seconds - 1
                        });            
                    }
                }
            }.bind(this), 100)
        })
    },
    stopTimer: function() {
        this.setState({
            timerRunning: false,
            timer: clearInterval(this.state.timer)
        })
    },
    resetTimer: function() {
        this.stopTimer();
        this.setState({
            minutes: this.props.time,
            seconds: 0
        })
    },
    onToggle: function(clockId) {
        this.props.onToggle(clockId)
    },
    onResetTimerClick: function() {
        this.props.resetTimer(this.state.timerType);
    },
    render: function() {
        if ((this.state.timerType === 'POMODORO_TIMER' && this.props.showPomodoroTimer)
        || (this.state.timerType === 'BREAK_TIMER' && this.props.showBreakTimer))
        {
            return(
                <div>
                    <div>{this.props.showBreakTimer ? 'Break time!' : 'Work time!'}</div>
                    <p>{this.state.minutes}:{('0' + this.state.seconds).slice(-2)}</p>
                    <button onClick={this.state.timerRunning ? this.stopTimer : this.startTimer}>
                        {this.state.timerRunning ? 'Stop' : 'Start'}
                    </button>
                    <button onClick={this.onResetTimerClick}>Reset</button>
                </div>
            )
        } else {
            return null;
        }
    }
})

export default Timer;