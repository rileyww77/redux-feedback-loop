import React, { Component } from 'react';
import { connect } from 'react-redux'

class Feelings extends Component {

    state = {
        feelings: ''
    }

    handleChangeFor = (event) => {
        this.setState({
            feelings: event.target.value
        })
    }
    
    sendFeelings = () => {
        this.props.dispatch({ type: 'FEELINGS', payload: this.state})
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <div>
                <h1>Please take the time to fill out this survey. Answer honestly!</h1>
                <br/>
                <h1>How are you feeling today?</h1>
                <textarea id="feelings" name="feelings" rows="4" cols="50" onChange = {(event) => this.handleChangeFor(event)}></textarea>
                <br />
                <button onClick={this.sendFeelings}>Next Page</button>
            </div>
        );
    }
}

export default connect()(Feelings);
