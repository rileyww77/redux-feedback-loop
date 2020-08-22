import React, { Component } from 'react';
import { connect } from 'react-redux'

class Support extends Component {

    state = {
        support: ''
    }

    handleChangeFor = (event) => {
        this.setState({
            support: event.target.value
        })
    }

    sendSupport = () => {
        if (this.state.support === ''){
            alert('please fill out form')
        } else {
        this.props.dispatch({ type: 'SUPPORT', payload: this.state})
        this.props.history.push('/comments')
        }
    }

    render() {
        return (
            <div>
                <h1>How well are you feeling supported?</h1>
                <input type='number' onChange = {(event) => this.handleChangeFor(event)}></input>
                <br />
                <button onClick={this.sendSupport}>Next Page</button>
            </div>
        );
    }
}

export default connect()(Support);
