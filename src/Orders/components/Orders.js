import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import YourOrders from "./YourOrders";
import getOrders from "Orders/helper/GetOrders";

function Orders() {
  const [cookies] = useCookies();
  const [data, setData] = useState();
  useEffect(() => {
    getOrders(cookies, setData);
  }, []);

  return <div>{data && data.map((item) => <YourOrders info={item} />)}</div>;
}

export default Orders;
