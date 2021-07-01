import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../pages/index'
import PageAbonnement from '../../pages/PageAbonnement'
import PageContact from '../../pages/PageContact'
import PageHebergement from '../../pages/PageHebergement'
import PageConnexion from '../../pages/PageConnexion'
import { Modele1, Modele2, Modele3 } from '../Hebergement';
import PageReservation from '../../pages/PageReservation';
import PageRestauration from '../../pages/PageRestauration';




const Routes = () => {
    return (
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/PageAbonnement" component={PageAbonnement} exact />
            <Route path="/PageContact" component={PageContact} exact />
            <Route path="/PageHebergement" component={PageHebergement} exact />
            <Route exact path="/modele-1" component={Modele1} />
            <Route exact path="/modele-2" component={Modele2} />
            <Route exact path="/modele-3" component={Modele3} />
            <Route exact path="/PageConnexion" component={PageConnexion} />
            <Route exact path="/PageReservation" component={PageReservation} />
            <Route exact path="/PageRestauration" component={PageRestauration}/>
          </Switch>
        </Router>
    );
};

export default Routes;