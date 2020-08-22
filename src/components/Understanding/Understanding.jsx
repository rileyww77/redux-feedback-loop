import React, { Component } from 'react';
import { connect } from 'react-redux'

class Understanding extends Component {

    state = {
        understanding: ''
    }

    handleChangeFor = (event) => {
        this.setState({
            understanding: event.target.value
        })
    
    }
    sendUnderstanding = () => {
        this.props.dispatch({ type: 'UNDERSTANDING', payload: this.state})
        this.props.history.push('/support')
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <textarea id="understanding" name="understanding" rows="4" cols="50" onChange = {(event) => this.handleChangeFor(event)}></textarea>
                <br />
                <button onClick={this.sendUnderstanding}>Next Page</button>
            </div>
        );
    }
}

export default connect()(Understanding);
