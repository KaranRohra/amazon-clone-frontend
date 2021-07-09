import CheckoutProduct from "Cart/components/CheckoutProduct";
import React from "react";
import "Styles/YourOrders.css";

let url = "";

function YourOrders({ info }) {
  if (info) {
    url = "/ordersdetails/" + info["id"] + "/";
  }

  return (
    <div>
      <div class="w3-container">
        <div className="head__nav order__header">
          <div className="head__option">
            <span className="head__optionLineOne">ORDER PLACED</span>
            {info && (
              <span style={{ width: 100 }} className="head__optionLineTwo">
                {new Date(info["created_at"]).toDateString()}
              </span>
            )}
          </div>

          <div className="head__option">
            <span className="head__optionLineOne">TOTAL</span>
            {info && (
              <span className="head__optionLineTwo">
                {info["product"]["price"]+info["product"]["shipping_fee"]}
              </span>
            )}
          </div>

          <div className="head__option">
            <span className="head__optionLineOne">SHIP TO</span>
            {info && (
              <span style={{ width: 200 }} className="head__optionLineTwo">
                {info["address"]["name"]}
              </span>
            )}
          </div>

          <div className="head__option2">
            {info && (
              <span className="head__optionLineTwo">
                <a href={url}>View Order Details</a>
              </span>
            )}
          </div>
        </div>

        <div className="middle">
          {info && (
            <CheckoutProduct
              id={info["product"]["id"]}
              image={info["product"]["images"][0]["image_url"]}
              price={info["product"]["price"]}
              name={info["product"]["name"]}
              buyItAgain={true}
              bsURL={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default YourOrders;
