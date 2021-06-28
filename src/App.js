import "App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "Home/components/Header";
import Home from "Home/components/Home";
import Login from "Accounts/components/Account";
import Checkout from "Cart/components/Checkout";
import ProductsBySearch from "Products/components/ProductsBySearch";
import Details from "Products/components/Details";
import Card from "Products/components/OutlinedCard";
import Address from "Cart/components/Address";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path ="/add">
              <Address/>
          </Route>
          <Route path="/search2/">
            <Header />
            <ProductsBySearch />
          </Route>
          <Route path="/search/">
            <Header />
            <ProductsBySearch />
          </Route>
          <Route path="/card/">
            <Card/>
          </Route>
          <Route path="/detail/">
            <Header />
            <Details />
          </Route>
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
