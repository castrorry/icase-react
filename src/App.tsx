import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { List } from "./components/List";
import { Pannel } from "./components/Pannel";
import Global from "./styles/global";

function App() {

  return (
    <Fragment>
      <Switch>
        <Route path='/criar'>
          <Pannel />
        </Route>
        <Route path='/'>
          <List />
        </Route>
      </Switch>
      <Global />
    </Fragment>
  );
}

export default App;
