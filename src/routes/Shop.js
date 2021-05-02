import "../styles/Shop.css";
import { useEffect } from "react";
import ProductList from "../components/ProductList";

function Shop(props) {
  useEffect(() => {
    document.title = "Shop";
  });
  return (
    <div className="shop">
      <h1>Shop</h1>
      <ProductList products={props.products} />
    </div>
  );
}

export default Shop;
