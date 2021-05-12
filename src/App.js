import React from 'react'
import Navbar from './components/Navbar'
import HomeBody from './components/HomeBody'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Articles from './components/Articles'

function App() {
  return (
      <Router>
        <Navbar />
      <Route exact path="/" component={HomeBody} />
      <Route exact path="/articles" component={Articles} />
      <Footer/>
      </Router>
  );
}

export default App;
