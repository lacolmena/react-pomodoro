import React from 'react';
import ReactDOM from 'react-dom';

const PomodoroControl = React.createClass ({
    render: function() {
        return(
            <p>Pomodoro time: {this.props.time} 
                {this.props.time > 1 ? ' minutes' : ' minute' }
            </p>
        )
    }
})

export default PomodoroControl;