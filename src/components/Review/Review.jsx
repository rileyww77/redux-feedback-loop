import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleSubmit = () => {
        
    }

    render() {
        return (
            <>
            <div>
                <h1>Please take a minute to review your answers:</h1>
            </div>
            <div>
                <h2>How are you feeling today?</h2>
                <ul>
                    <li>{this.props.reduxState.feelingsReducer.feelings}</li>
                </ul>
            </div>
            <div>
                <h2>How well are you understanding the content</h2>
                <ul>
                    <li>{this.props.reduxState.understandingReducer.understanding}</li>
                </ul>
            </div>
            <div>
                <h2>How well are you feeling supported?</h2>
                <ul>
                    <li>{this.props.reduxState.supportReducer.support}</li>
                </ul>
            </div>
            <div>
                <h2>How are you feeling today?</h2>
                <ul>
                    <li>{this.props.reduxState.commentsReducer.comments}</li>
                </ul>
            </div>
            <button onClick={this.handleSubmit}>Submit Survey</button>
            </>
        );
    }
}


const mapStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
  export default connect(mapStateToProps)(Review);


