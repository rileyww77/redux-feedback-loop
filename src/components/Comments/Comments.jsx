import React, { Component } from 'react';
import { connect } from 'react-redux'

class Comments extends Component {
    render() {
        return (
            <div>
                <h1>Any comments you want to leave?</h1>
                <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
                <br />
                <button>Next Page</button>
            </div>
        );
    }
}

export default connect()(Comments);
