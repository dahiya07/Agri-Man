import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout";
import "./App.css";
import AgriInputRequest from "./components/template/agriInputRequest";
import SupplierMaintance from "./components/template/supplierMaintaince";
import AgriInputMaintance from "./components/template/agriInputMaintance";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/agriRequest" />
          </Route>
          <Route exact path="/agriRequest" component={AgriInputRequest}/>
          <Route exact path="/supplierMaintance" component={SupplierMaintance}/>
          <Route exact path="/agriMaintance" component={AgriInputMaintance}/>
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default App;
