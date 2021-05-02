import "../styles/ProductDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail(props) {
  const { name } = useParams();
  useEffect(() => {
    document.title = product.name;
  });

  const [quantity, setQuantity] = useState(1);

  const product = props.products.filter(product => product.name === name)[0];

  return (
    <div className="product-detail">
      <img src={product.img} alt="" />
      <div>
        <h1>{product.name}</h1>
        <p className="product-detail-price">₱{product.price}</p>
        <p>
          The story of Jujutsu Kaisen is set in a world where Cursed Spirits
          feed on unsuspecting humans and fragments of the legendary and feared
          demon Ryomen Sukuna have been lost and scattered about. Should any
          curse consume Sukuna's body parts, the power they gain could destroy
          the world as we know it. Fortunately, there exists a mysterious school
          of Jujutsu Sorcerers who exist to protect the precarious existence of
          the living from the supernatural!
        </p>
        <div className="product-detail-quantity">
          <button
            onClick={() => (quantity < 1 ? false : setQuantity(quantity - 1))}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.4443 18.3147C6.08879 19.4135 8.02219 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.02219 19.4135 6.08879 18.3147 4.4443C17.2159 2.79981 15.6541 1.51809 13.8268 0.761209C11.9996 0.00433283 9.98891 -0.193701 8.0491 0.192152C6.10929 0.578004 4.32746 1.53041 2.92894 2.92894C1.53041 4.32746 0.578004 6.10929 0.192152 8.0491C-0.1937 9.98891 0.00433283 11.9996 0.761209 13.8268C1.51809 15.6541 2.79981 17.2159 4.4443 18.3147ZM5.55544 3.34825C6.87103 2.4692 8.41775 2 10 2C12.1217 2 14.1566 2.84286 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 11.5823 17.5308 13.129 16.6518 14.4446C15.7727 15.7602 14.5233 16.7855 13.0615 17.391C11.5997 17.9965 9.99113 18.155 8.43928 17.8463C6.88743 17.5376 5.46197 16.7757 4.34315 15.6569C3.22433 14.538 2.4624 13.1126 2.15372 11.5607C1.84504 10.0089 2.00347 8.40035 2.60897 6.93854C3.21447 5.47673 4.23985 4.2273 5.55544 3.34825ZM6 11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9H6C5.73478 9 5.48043 9.10536 5.29289 9.29289C5.10536 9.48043 5 9.73478 5 10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11Z"
                fill="#BFC9D9"
              ></path>
            </svg>
          </button>
          <input
            type="number"
            min="0"
            onChange={e => setQuantity(Number(e.target.value))}
            value={quantity}
          />
          <button onClick={() => setQuantity(quantity + 1)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.4443 18.3147C6.08879 19.4135 8.02219 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.02219 19.4135 6.08879 18.3147 4.4443C17.2159 2.79981 15.6541 1.51809 13.8268 0.761209C11.9996 0.00433283 9.98891 -0.193701 8.0491 0.192152C6.10929 0.578004 4.32746 1.53041 2.92894 2.92894C1.53041 4.32746 0.578004 6.10929 0.192152 8.0491C-0.1937 9.98891 0.00433283 11.9996 0.761209 13.8268C1.51809 15.6541 2.79981 17.2159 4.4443 18.3147ZM5.55544 3.34825C6.87103 2.4692 8.41775 2 10 2C12.1217 2 14.1566 2.84286 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 11.5823 17.5308 13.129 16.6518 14.4446C15.7727 15.7602 14.5233 16.7855 13.0615 17.391C11.5997 17.9965 9.99113 18.155 8.43928 17.8463C6.88743 17.5376 5.46197 16.7757 4.34315 15.6569C3.22433 14.538 2.4624 13.1126 2.15372 11.5607C1.84504 10.0089 2.00347 8.40035 2.60897 6.93854C3.21447 5.47673 4.23985 4.2273 5.55544 3.34825ZM11 9H14C14.2652 9 14.5196 9.10536 14.7071 9.29289C14.8946 9.48043 15 9.73478 15 10C15 10.2652 14.8946 10.5196 14.7071 10.7071C14.5196 10.8946 14.2652 11 14 11H11V14C11 14.2652 10.8946 14.5196 10.7071 14.7071C10.5196 14.8946 10.2652 15 10 15C9.73478 15 9.48043 14.8946 9.29289 14.7071C9.10536 14.5196 9 14.2652 9 14V11H6C5.73478 11 5.48043 10.8946 5.29289 10.7071C5.10536 10.5196 5 10.2652 5 10C5 9.73478 5.10536 9.48043 5.29289 9.29289C5.48043 9.10536 5.73478 9 6 9H9V6C9 5.73478 9.10536 5.48043 9.29289 5.29289C9.48043 5.10536 9.73478 5 10 5C10.2652 5 10.5196 5.10536 10.7071 5.29289C10.8946 5.48043 11 5.73478 11 6V9Z"
                fill="#BFC9D9"
              ></path>
            </svg>
          </button>
        </div>
        <button
          onClick={() => props.handleCartAddition(product.id, quantity)}
          className="add-to-cart-btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
