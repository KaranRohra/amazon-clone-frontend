import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import "Styles/Header.css";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { handleLogout } from "Accounts/helper/LogoutAPI";
import {getUser} from 'Accounts/helper/GetUser';


function Header() {
  const [email, setEmail] = useState(null);
  const [cookies, setCookies, removeCookies] = useCookies("");

  const history = useHistory();
  
  useEffect(() => {
    getUser(cookies,setEmail);
  },[]);


  
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
        <Link to={!email && "/login"}>
          <div onClick={(e) => {handleLogout(cookies, history, setEmail, removeCookies)}} className="header__option">
            <span className="header__optionLineOne">
              {email ? "Hello " + email : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {email ? "Sign Out" : "Sign In"}
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
            {email ? <ShoppingBasketIcon /> : ""}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
