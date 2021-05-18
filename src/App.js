import React from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import PageContact from './pages/PageContact';
import PageAbonnement from './pages/PageAbonnement';
import PageHebergement from './pages/PageHebergement';
import { Modele1, Modele2, Modele3 } from './composants/Hebergement';
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/PageAbonnement" component={PageAbonnement} exact />
          <Route path="/PageContact" component={PageContact} exact />
          <Route path="/PageHebergement" component={PageHebergement} exact />
          <Route exact path="/modele-1" component={Modele1}/>
          <Route exact path="/modele-2" component={Modele2}/>
          <Route exact path="/modele-3" component={Modele3}/>
      </Switch>
    </Router>
    </AnimatePresence>
  );
}

export default App;
