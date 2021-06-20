import React, { useState, useEffect } from "react";
import baseURL from "ApiUrls";
import "Styles/Home.css";
import Product from 'Products/components/Product';
import {getAllProducts} from 'Home/helper/ProductAPI';


function Home() {
  const [data, setData] = useState(null);

  
  useEffect(() => {
    getAllProducts(setData); 
  },[baseURL]);

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
              id={data[0]["id"]}
              title={data[0]["name"]}
              price={data[0]["price"]}
              rating={5}
              image={
                data[0]["images"][0]["image_url"]
              }
            />
          )}
          {data && (
            <Product
              id={data[1]["id"]}
              title={data[1]["name"]}
              price={data[1]["price"]}
              rating={5}
              image={
                data[1]["images"][0]["image_url"]
              }
            />
          )}
        </div>
        <div className="home__row">
        {data && (
            <Product
              id={data[2]["id"]}
              title={data[2]["name"]}
              price={data[2]["price"]}
              rating={5}
              image={
                data[2]["images"][0]["image_url"]
              }
            />
          )}
          {data && (
            <Product
              id={data[3]["id"]}
              title={data[3]["name"]}
              price={data[3]["price"]}
              rating={5}
              image={
                data[3]["images"][0]["image_url"]
              }
            />
          )}
          {data && (
            <Product
              id={data[4]["id"]}
              title={data[4]["name"]}
              price={data[4]["price"]}
              rating={5}
              image={
                data[4]["images"][0]["image_url"]
              }
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