import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/details" component={Details}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
