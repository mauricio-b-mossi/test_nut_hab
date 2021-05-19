import React, {useState} from 'react'
import Navbar from './components/Navbar'
import HomeBody from './components/HomeBody'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Articles from './components/Articles'
import { Context } from './helper/Context'
import OnePost from './components/OnePost'

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  
  return (
    // <Context.Provider value={{isAdmin, setIsAdmin}}> {/* </Context.Provider> */}
    <Router>
      <Navbar />
      <Route exact path="/" component={HomeBody} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/articles/:slug" component={OnePost} />
      <Footer />
    </Router>
  );
}

export default App;
