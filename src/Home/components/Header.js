import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import "Styles/Header.css";
import { initialState } from "reducer";


function Header() {
  // const history = useHistory();
  // const handleAuthentiation = () => {
  //   if (initialState.user) {
  //     backendAPI.get("/accounts/logout/").then((response) => {
  //       console.log(response);
  //       // initialState.user = null;
  //       history.replace("/login");
  //       console.log(initialState.user);
  //     });
  //   }
  // };

  // console.log(initialState.user);

  // const url = "http://localhost:3000/";

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!initialState.user && "/login"}>
          <div className="header__option">
            <span className="header__optionLineOne">
              {initialState.user ? "Hello " + initialState.user : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {initialState.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            {initialState.user ? <ShoppingBasketIcon /> : ""}
            {initialState.user ? (
              <span className="header__optionLineTwo header__basketCount">
                0
              </span>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
