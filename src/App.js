import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Error from "./views/Error";
import { GlobalContext } from "./context/Context";

const App = () => (
    <GlobalContext>
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>
        </Router>
    </GlobalContext>
);

export default App;
