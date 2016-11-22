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
                    if (this.state.timerType === 'POMODORO_TIMER') {
                        this.onToggle('POMODORO_TIMER');
                        this.stopTimer();
                    } else {
                        this.onToggle('BREAK_TIMER');
                        this.stopTimer();
                    }
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
    onToggle: function(clockId) {
        this.props.onToggle(clockId)
    },
    render: function() {
        return(
            <div>
                <p>{this.state.minutes}:{('0' + this.state.seconds).slice(-2)}</p>
                <button onClick={this.state.timerRunning ? this.stopTimer : this.startTimer}>
                    {this.state.timerRunning ? 'Stop' : 'Start'}
                </button>
            </div>
        )
    }
})

export default Timer;