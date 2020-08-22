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
        if (this.state.understanding === ''){
            alert('please fill out form')
        } else {
        this.props.dispatch({ type: 'UNDERSTANDING', payload: this.state})
        this.props.history.push('/support')
        }
    }

    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <input type='number' onChange = {(event) => this.handleChangeFor(event)}></input>
                <br />
                <button onClick={this.sendUnderstanding}>Next Page</button>
            </div>
        );
    }
}

export default connect()(Understanding);
