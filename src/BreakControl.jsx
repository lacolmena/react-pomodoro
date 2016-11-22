import React from 'react';
import ReactDOM from 'react-dom';

const BreakControl = React.createClass ({
    render: function() {
        return(
            <p>Break time: {this.props.breakTime} minutes</p>
        )
    }
})

export default BreakControl;