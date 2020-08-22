import React, { Component } from 'react';
import { connect } from 'react-redux'

class Support extends Component {

    sendSupport = () => {
        this.props.dispatch({ type: 'SUPPORT', payload: this.state})
        this.props.history.push('/comments')
    }

    render() {
        return (
            <div>
                <h1>How well are you feeling supported?</h1>
                <textarea id="support" name="support" rows="4" cols="50"></textarea>
                <br />
                <button onClick={this.sendSupport}>Next Page</button>
            </div>
        );
    }
}

export default connect()(Support);
