import backendAPI from "../../axios";


export function getAllProducts(setData) {
  backendAPI.get("/products/").then((response) => {
    console.log(response);
    setData(response.data);
  });
}
