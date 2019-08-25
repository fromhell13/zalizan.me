import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import About from './About';
import Works from './Works';
import Resume from './Resume';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="about" path="/about" component={About} />
          <Route name="works" path="/works" component={Works} />
          <Route name="resume" path="/resume" component={Resume} />
          </Switch>
          <Footer />
        </div>
      </Router>
      
    )
  }
}
export default App;