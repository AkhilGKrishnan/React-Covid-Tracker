import React, { Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header'
import World from './components/World'
import India from './components/India'
import Footer from './components/Footer'


class App extends Component{
  render(){
    return (
      <div className="container-fluid">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <India/>
            </Route>
            <Route exact path="/india">
              <India/>
            </Route>
            <Route path="/world">
              <World/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default App;
