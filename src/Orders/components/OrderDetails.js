import getOrderByID from "Orders/helper/GetOrderByIDAPI";
import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "Styles/OrderDetails.css";
import CheckoutProduct from "Cart/components/CheckoutProduct";

let Id = "";
function OrderTable() {
  const [data, setData] = useState();
  const [cookies] = useCookies();

  function getOrderId(url) {
    for (let i = url.length - 2; i >= 0; i--) {
      if (url.charAt(i) == "/") {
        for (let j = i + 1; j < url.length - 1; j++) {
          Id += url.charAt(j);
        }
        break;
      }
    }
    return Id;
  }

  useEffect(() => {
    let url = window.location.href;
    let id = getOrderId(url);
    getOrderByID(id, cookies, setData);
  }, []);

  return (
    <div className="try">
      <div className="order_table">
        <table>
          <tbody>
            <tr>
              <td>
                <strong>Shipping Address</strong>
              </td>
              <td>
                <strong>Payment Method</strong>
              </td>
              <td colspan="2">
                <strong>Order Summary</strong>
              </td>
            </tr>
            <tr>
              {data && <td colSpan="2"><b>{data["address"]["name"]}</b></td>}
            </tr>
            <tr>
              
              {data && <td>{data["address"]["address_line"]}</td>}

              <td>Cash on Delivery</td>
              <td>Item(s) Subtotal:</td>
              {data && <td>₹{data["product"]["price"]}</td>}
            </tr>
            <tr>
              {data && <td colspan="2">{data["address"]["land_mark"]}</td>}
              <td>Shipping Charges:</td>
              {data && <td>₹{data["product"]["shipping_fee"]}</td>}
            </tr>
            <tr>
              {data && (
                <td colspan="2">
                  {data["address"]["city"] +
                    " " +
                    data["address"]["state"] +
                    " - " +
                    data["address"]["pincode"]}
                </td>
              )}
              <td>Total:</td>
              {data && <td>₹{data["product"]["price"]+data["product"]["shipping_fee"]}</td>}
            </tr>
            <tr>
              {data && <td colspan="2">{data["address"]["country"]}</td>}
              <td>Grand Total:</td>
              {data && <td>₹{data["product"]["price"] + data["product"]["shipping_fee"]}</td>}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="middle">
        {data && (
          <CheckoutProduct
            id={data["product"]["id"]}
            image={data["product"]["images"][0]["image_url"]}
            price={data["product"]["price"]}
            name={data["product"]["name"]}
            buyItAgain={true}
            bsURL={false}
          />
        )}
      </div>
    </div>
  );
}

export default OrderTable;
