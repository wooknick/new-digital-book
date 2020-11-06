import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import First from "../Routes/First";
import Second from "../Routes/Second";
import Third from "../Routes/Third";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Third} />
      <Route path="/v1" component={First} />
      <Route path="/v2" component={Second} />
      <Route path="/v3" component={Third} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
