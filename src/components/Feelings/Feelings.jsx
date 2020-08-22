import React, { Component } from 'react';
import { connect } from 'react-redux'

class Feelings extends Component {
    render() {
        return (
            <div>
                <h1>How are you feeling today?</h1>
                <textarea id="feelings" name="feelings" rows="4" cols="50"></textarea>
            </div>
        );
    }
}

export default connect()(Feelings);
