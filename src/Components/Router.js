import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "../Routes/Home.js";
import TV from "../Routes/TV.js";
import Search from "../Routes/Search.js";
import Detail from "../Routes/Detail.js";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/tv/popular" exact render={() => <h1>popular</h1>} />
      <Route path="/search" exact component={Search} />
      <Route path="/detail" exact component={Detail} />
      <Redirect path="*" to="/"></Redirect>
    </Switch>
  </Router>
);
