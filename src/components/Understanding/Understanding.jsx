import React, { Component } from 'react';
import { connect } from 'react-redux'

class Understanding extends Component {
    render() {
        return (
            <div>
                <h1>How well are you understanding the content?</h1>
                <textarea id="understanding" name="understanding" rows="4" cols="50"></textarea>
                <br />
                <button>Next Page</button>
            </div>
        );
    }
}

export default connect()(Understanding);
