import React, { useState, useEffect } from "react";
import backendAPI from "./axios";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [data, setData] = useState(null);

  const url = "http://localhost:5000/products/get-product-by-page-number/0/"
  useEffect(() => {
    backendAPI
      .get("/products/get-product-by-page-number/0/")
      .then((response) => {
        setData(response.data);
      });
  }, [url]);

  if (data) {
    console.log(data);
  }

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          {data && (
            <Product
              id={data["product_0"]["details"]["id"]}
              title={data["product_0"]["details"]["name"]}
              price={data["product_0"]["details"]["price"]}
              rating={5}
              image={
                backendAPI.defaults.baseURL + data["product_0"]["images"][0]
              }
            />
          )}
          {data && (
            <Product
              id={data["product_1"]["details"]["id"]}
              title={data["product_1"]["details"]["name"]}
              image={
                backendAPI.defaults.baseURL + data["product_1"]["images"][0]
              }
              price={data["product_1"]["details"]["price"]}
              rating={5}
            />
          )}
        </div>

        <div className="home__row">
          {data && (
            <Product
              id={data["product_2"]["details"]["id"]}
              title={data["product_2"]["details"]["name"]}
              image={
                backendAPI.defaults.baseURL + data["product_2"]["images"][0]
              }
              price={data["product_2"]["details"]["price"]}
              rating={5}
            />
          )}
          {data && (
            <Product
              id={data["product_3"]["details"]["id"]}
              title={data["product_3"]["details"]["name"]}
              image={
                backendAPI.defaults.baseURL + data["product_3"]["images"][0]
              }
              price={data["product_3"]["details"]["price"]}
              rating={5}
            />
          )}
          {data && (
            <Product
              id={data["product_4"]["details"]["id"]}
              title={data["product_4"]["details"]["name"]}
              image={
                backendAPI.defaults.baseURL + data["product_4"]["images"][0]
              }
              price={data["product_4"]["details"]["price"]}
              rating={5}
            />
          )}
        </div>

        <div className="home__row">
          
        </div>
      </div>
    </div>
  );
}

export default Home;
