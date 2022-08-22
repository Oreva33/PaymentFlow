import React from "react";
import Profile from "./pages/Profile/Profile";
import PaymentPort1 from "./pages/PaymentPort1/PaymentPort1"
import PaymentPort2 from "./pages/PaymentPort2/PaymentPort2"
import PaymentPort3 from "./pages/PaymentPort3/PaymentPort3"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Profile />
        </Route>
        <Route path="/paymentport/page1">
          <PaymentPort1/>
        </Route>
        <Route path="/paymentport/page2">
          <PaymentPort2/>
        </Route>
        <Route path="/paymentport/page3">
        <PaymentPort3/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
