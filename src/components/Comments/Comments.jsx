import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comments extends Component {

    state = {
        comments: ''
    }

    handleChangeFor = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    sendComments = () => {
        if (this.state.comments === ''){
            alert('please fill out form')
        } else {
        this.props.dispatch({ type: 'COMMENTS', payload: this.state})
        this.props.history.push('/review')
        }
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <textarea id="comments" name="comments" rows="4" cols="50" onChange = {(event) => this.handleChangeFor(event)}></textarea>
                <br />
                <button onClick={this.sendComments}>Next Page</button>
            </div>
        );
    }
}

export default connect()(Comments);
