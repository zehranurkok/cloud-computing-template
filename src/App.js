import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import LearnMore from './components/pages/LearnMore/LearnMore';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/learnmore' exact component={LearnMore}/>
        <Route path='/sign-up' exact component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
