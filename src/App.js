import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import CreateChannel from "./components/dashboard/channels/CreateChannel"
import CreateService from "./components/dashboard/services/CreateService"
import CreateServiceProvider from "./components/dashboard/serviceProviders/CreateServiceProvider"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/create-service-provider" component={CreateServiceProvider} />
          <Route path="/create-service" component={CreateService} />
          <Route path="/create-channel" component={CreateChannel} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
