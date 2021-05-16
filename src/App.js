import React, {useState} from 'react'
import Navbar from './components/Navbar'
import HomeBody from './components/HomeBody'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Articles from './components/Articles'
import { Context } from './helper/Context'
import ProtectedRoute from './components/ProtectedRoute'
import Auth from './components/Auth'

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  
  return (
      <Context.Provider value={{isAdmin, setIsAdmin}}>
    <Router>
        <Navbar />
        <Route exact path="/" component={HomeBody} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path='/articles/create' component={ProtectedRoute} />
        <Route exact path='/auth' component={Auth   }/>
        <Footer />
    </Router>
      </Context.Provider>
  );
}

export default App;
