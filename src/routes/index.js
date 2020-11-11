import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "~/pages/Auth/Login";
import Home from "~/pages/Home";
import Hotel from "~/pages/Hotel";
import Profile from "~/pages/Profile";
import Bedrooms from "~/pages/Bedrooms";

const initialRoutes = [
  {
    path: "/",
    component: Login
  },
  {
    path: "/inicio",
    component: Home
  },
  {
    path: "/minha-conta",
    component: Profile
  },
  {
    path: "/hotel",
    component: Hotel
  },
  {
    path: "/quartos",
    component: Bedrooms
  }
]

const Routes = () => (
  <Router>
    <Switch>
      {
        initialRoutes.map((route) => <Route exact path={route.path} component={route.component} />)
      }
    </Switch>
  </Router>
);

export default Routes;