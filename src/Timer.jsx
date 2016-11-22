import React from 'react';
import ReactDOM from 'react-dom';

const Timer = React.createClass({
    getInitialState: function() {
        return {
            minutes: this.props.time,
            seconds: 0,
            timerRunning: false,
            timer: null
        }
    },
    startTimer: function() {
        this.setState({
            minutes: this.props.time,
            seconds: 0,
            timerRunning: true,
            timer: setInterval(function(){
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
            }.bind(this), 1000)
        })
    },
    stopTimer: function() {
        this.setState({
            timerRunning: false,
            timer: clearInterval(this.state.timer)
        })
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