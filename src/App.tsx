import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
