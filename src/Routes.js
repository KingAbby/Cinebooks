import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Index";
import Detail from "./pages/Detail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/detail/:id" exact element={<Detail />} />
      <Route path="/" exact element={<Home />} />
    </Switch>
  );
};

export default Routes;
