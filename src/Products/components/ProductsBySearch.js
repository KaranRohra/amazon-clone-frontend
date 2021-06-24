import React, {useEffect, useState} from "react";
import { useCookies } from "react-cookie";
import {getSearchedProducts} from 'Home/helper/SearchAPI';
import { useHistory } from "react-router-dom";
import DisplayProducts from "Products/components/DisplayProducts";
import "Styles/CheckoutProduct.css";


var text = "";
const Data = JSON.parse(window.localStorage.getItem("abcdef"))|| null;
function ProductsBySearch() {

  const [data, setData] = useState(Data);
  const [searchedText,setSearchedText] = useState();

  const history = useHistory();

  
  function getText(url){
      for(let i=url.length-4;i>=0;i--){
          if(url.charAt(i) == "/"){
            for(let j=i+1;j<url.length-3;j++){
                text += url.charAt(j);
            }
            break;
          }
        
      }
      console.log(text);
      return text;
  }
  useEffect(() => {
      var url = window.location.href;
      console.log(text);
      if(url!="http://localhost:3000/search2/"){
        getSearchedProducts(getText(url),setData,history,url.charAt(url.length-2));
        setSearchedText(text);
      }
          
      text=""
      history.push("/search2/")
      
  })

  useEffect(() => {
    if(data)
      window.localStorage.setItem('abcdef', JSON.stringify(data));
  });


  function handlePageNumber(page_no){
    // console.log(page_no);
    // if(data)
    //   console.log(data[0].category);
    getSearchedProducts(searchedText,setData,history,page_no);

  }
  
  console.log(data);
  const [cookies] = useCookies("");
  return (
    <div>
        {data && data.map((items) => (
          <DisplayProducts 
            id = {items.id}
            name = {items.name}
            image = {items.images[0]["image_url"]}
            price = {items.price}

          />
        ))}
        <div class="page__number">
        
        {data && <button className="pg" onClick={()=>{handlePageNumber(1)}}>1</button>}
        {data && <button className="pg" onClick={()=>{handlePageNumber(2)}}>2</button>}
        
      </div>
    </div>
  );
}

export default ProductsBySearch;
