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
        <Route exact path='/cloud-computing-template' component={Home}/>
        <Route path='/cloud-computing-template/services' component={Services}/>
        <Route path='/cloud-computing-template/learnmore' component={LearnMore}/>
        <Route path='/cloud-computing-template/sign-up' component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
