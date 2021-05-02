import "../styles/ProductList.css";
import { Link } from "react-router-dom";
import Product from "./Product";

function ProductList(props) {
  const { products } = props;
  return (
    <div className="product-list">
      {products.map((product, i) => (
        <Link to={`/product/${product.name}`}>
          <Product
            name={product.name}
            img={product.img}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
