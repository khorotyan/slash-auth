import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CombinedContext from "./contexts/combinedContext";

const Routes = () => {
  return (
    <CombinedContext>
      <Router>
        <Switch>
          <Route path="/register" exact component={SignUp} />
          <Route path="/login" exact component={SignIn} />
        </Switch>
      </Router>
    </CombinedContext>
  );
};

export default Routes;
