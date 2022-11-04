import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.scss";
import Layout from '../DashboardLayout';
import Arcotechos from '../Arcotechos';
import Contact from '../Contact';
import Econotecho from '../Econotecho';
import EstructurasMetalicas from '../EstructurasMetalicas';
import Glamet from '../Glamet';
import Main from '../Main';
import Lamina from '../Lamina';
import Losacero from '../Losacero';
import Manuales from '../Manuales';
import Metcopo from '../Metcopo';
import Multytecho from "../Multytecho";
import Nosotros from "../Nosotros";
import Proyectos from "../Proyectos";
import Refrimuro from "../Refrimuro";
import Multymuro from "../Multymuro";
import RedirectWithState from "../Redirect";



type Props = {};
type State = {};

class App extends Component<Props, State> {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route path="/arcotechos" exact component={Arcotechos}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/econotecho" exact component={Econotecho}/>
            <Route path="/estructurasmetalicas" exact component={EstructurasMetalicas}/>
            <Route path="/glamet" exact component={Glamet}/>
            <Route path="/main" exact component={Main}/>
            <Route path="/redirect" exact component={RedirectWithState}/>
            <Route path="/lamina" exact component={Lamina}/>
            <Route path="/losacero" exact component={Losacero}/>
            <Route path="/manuales" exact component={Manuales}/>
            <Route path="/metcopo" exact component={Metcopo}/>
            <Route path="/multytecho" exact component={Multytecho}/>
            <Route path="/nosotros" exact component={Nosotros}/>
            <Route path="/proyectos" exact component={Proyectos}/>
            <Route path="/refrimuro" exact component={Refrimuro}/>
            <Route path="/multymuro" exact component={Multymuro}/>
            <Route path="/" exact component={Main} />} />
            <Route render={() => <Redirect to="/main" />} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;