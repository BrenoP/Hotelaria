import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "~/pages/Home";

const initialRoutes = [
   {
      path: "/",
      component: Home
   }
]

const Routes = () => (
  <Router>
    <Switch>
      {
         initialRoutes.map((route) => <Route path={route.path} component={route.component} />)
      }
    </Switch>
  </Router>
);

export default Routes;