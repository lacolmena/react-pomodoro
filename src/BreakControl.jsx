import React from 'react';
import ReactDOM from 'react-dom';

const BreakControl = React.createClass ({
    render: function() {
        return(
            <p>Break time: {this.props.breakTime} 
                {this.props.breakTime > 1 ? ' minutes' : ' minute' }
            </p>
        )
    }
})

export default BreakControl;