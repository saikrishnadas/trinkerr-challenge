import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Homepage from "./components/Homepage";
import UserRegister from "./components/UserRegister";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/register" component={UserRegister} />
          <Route path="/homepage" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
