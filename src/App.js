import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
