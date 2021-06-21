import "App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "Home/components/Header";
import Home from "Home/components/Home";
import Login from "Accounts/components/Account";
import Checkout from "Cart/components/Checkout";


function App() {
   
    
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

