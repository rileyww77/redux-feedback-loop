import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comments extends Component {

    sendComments = () => {
        this.props.dispatch({ type: 'COMMENTS', payload: this.state})
        this.props.history.push('/review')
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br />
                <button onClick={this.sendComments}>Next Page</button>
            </div>
        );
    }
}

export default connect()(Comments);
