import "../styles/Product.css";
function Product(props) {
  return (
    <div className="product">
      <img src={props.img} alt="" />
      <p class="product-name">{props.name}</p>
      <p class="product-price">₱{props.price}</p>
    </div>
  );
}

export default Product;
