import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Index";
import Detail from "./pages/Detail";
import AboutUs from "./pages/AboutUs";

const Routes = () => {
  return (
    <Switch>
      <Route path="/detail/:id" exact element={<Detail />} />
      <Route path="/" exact element={<Home />} />
      <Route path="/AboutUs.js" exact element={<AboutUs />} />
    </Switch>
  );
};

export default Routes;
