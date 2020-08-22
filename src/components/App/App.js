import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Feelings/Feelings.jsx';
import Understanding from '../Understanding/Understanding.jsx';
import Support from '../Support/Support.jsx';
import Comments from '../Comments/Comments.jsx';
import Review from '../Review/Review.jsx'
import { HashRouter as Router, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Route exact path="/" component={Feelings} />
        <Route exact path="/understanding" component={Understanding} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/review" component={Review} />
        <br/>
      </div>
      </Router>
    );
  }
}

export default App;
