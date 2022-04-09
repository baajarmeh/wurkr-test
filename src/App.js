import './App.css';
import UserCards from './components/user-cards/user-cards';
import Footer from './components/footer/footer';
import Login from './components/sign/login';
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={UserCards} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
