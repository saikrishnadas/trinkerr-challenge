import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserProvider } from "./components/UserContext";

import Nav from "./components/Nav";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Homepage from "./components/Homepage";
import UserRegister from "./components/UserRegister";

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/register" component={UserRegister} />
            <Route path="/homepage/:user" component={Homepage} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
