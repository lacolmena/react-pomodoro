import React from 'react';
import ReactDOM from 'react-dom';

const PomodoroControl = React.createClass ({
    render: function() {
        return(
            <p>Pomodoro time: {this.props.time} minutes</p>
        )
    }
})

export default PomodoroControl;