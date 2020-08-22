import React, { Component } from 'react';
import { connect } from 'react-redux'

class Support extends Component {
    render() {
        return (
            <div>
                <h1>How well are you feeling supported?</h1>
                <textarea id="support" name="support" rows="4" cols="50"></textarea>
            </div>
        );
    }
}

export default connect()(Support);
