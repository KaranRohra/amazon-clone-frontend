import React, { useEffect, useState } from "react";
import { getSearchedProducts } from "Home/helper/SearchAPI";
import { useHistory } from "react-router-dom";
import DisplayProducts from "Products/components/DisplayProducts";
import "Styles/CheckoutProduct.css";
import ReactPaginate from "react-paginate";
import "Styles/Pagination.css";
import getProductCount from "Products/helper/ProductCountAPI";

var text = "";
const Data = JSON.parse(window.localStorage.getItem("data")) || null;
function ProductsBySearch() {
  const [data, setData] = useState(Data);
  const [searchedText, setSearchedText] = useState();
  const [total, setTotal] = useState(0);
  const productsPerPage = 5;

  const history = useHistory();
  var url = window.location.href;

  function getText(url) {
    for (let i = url.length - 4; i >= 0; i--) {
      if (url.charAt(i) === "/") {
        for (let j = i + 1; j < url.length - 3; j++) {
          text += url.charAt(j);
        }
        break;
      }
    }
    return text;
  }
  useEffect(() => {
    var url = window.location.href;
    if (!url.endsWith("search2/")) {
      getProductCount(getText(url),setTotal);
      text="";
      getSearchedProducts(
        getText(url),
        setData,
        history,
        url.charAt(url.length - 2)
      );
      setSearchedText(text);
    }
    text = "";
    history.push("/search2/");
  },[url]);

  useEffect(() => {
    if (data) window.localStorage.setItem("data", JSON.stringify(data));
  });

  function handlePageNumber({selected}) {
    getSearchedProducts(searchedText, setData, history, selected+1);
  }

  const pgCount = Math.ceil(total/productsPerPage);

  return (
    <div>
      {data &&
        data.map((items) => (
          <DisplayProducts
            id={items.id}
            name={items.name}
            image={items.images[0]["image_url"]}
            price={items.price}
          />
        ))}
      <div class="page__number">
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pgCount}
          onPageChange={handlePageNumber}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default ProductsBySearch;
