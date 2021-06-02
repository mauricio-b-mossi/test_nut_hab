import React, {useState} from 'react'
import Navbar from './components/Navbar'
import HomeBody from './components/HomeBody'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Articles from './components/Articles'
import OnePost from './components/OnePost'
import Recepies from './components/Recepies'
import MailingList from './components/MailingList'
import Achievement from './components/Achievements'

function App() {

  const [isAdmin, setIsAdmin] = useState(false);
  
  return (
    // <Context.Provider value={{isAdmin, setIsAdmin}}> {/* </Context.Provider> */}
    <Router>
      <Navbar />
      <Route exact path="/" component={HomeBody} />
      <Route exact path="/articulos" component={Articles} />
      <Route exact path="/:slug" component={OnePost} />
      <Route exact path="/recetas" component={Recepies} />
      <Route exact path="/achivements" component={Achievement} />
      <MailingList/>
        {/* <Footer /> */}
      
    </Router>
  );
}

export default App;
