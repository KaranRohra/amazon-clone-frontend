import { getProductDetailsById } from "Products/helper/getProductDetails";
import React from "react";
import { useEffect, useState } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import "Styles/Details.css";
import "Styles/CheckoutProduct.css";
import OutlinedCard from "Products/components/OutlinedCard";

var id = "";
const Details = () => {
  const [data, setData] = useState("");

  function getId(url) {
    for (var i = url.length - 2; i >= 0; i--) {
      if (url.charAt(i) === "/") {
        for (var j = i + 1; j <= url.length - 2; j++) {
          id += url.charAt(j);
        }

        break;
      }
    }
    return id;
  }
  useEffect(() => {
    const url = window.location.href + "/";
    getProductDetailsById(getId(url), setData);
    id = "";
  }, ["http://localhost:3000/detail/"]);

  const [current, setCurrent] = useState(0);
  if (data) {
    var length = data.images.length;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data.images) || data.images.length <= 0) {
    return null;
  }

  return (
    <div className="details">
      <div className="details__left">
        <section className="slider">
          <FaCaretLeft className="left-arrow" onClick={prevSlide} />
          <FaCaretRight className="right-arrow" onClick={nextSlide} />
          {data.images.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {data && index === current && (
                  <img
                    src={slide["image_url"]}
                    alt="travel image"
                    className="image"
                  />
                )}
              </div>
            );
          })}
        </section>
      </div>
      <div className="details__right">
        {data && <OutlinedCard details={data} />}
      </div>
    </div>
  );
};

export default Details;
