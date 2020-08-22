import React, { Component } from 'react';

class Success extends Component {
    
    redoSurvey = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Success!</h1>
                <button onClick={this.redoSurvey}>Take Survey</button>
            </div>
        );
    }
}

export default Success;
