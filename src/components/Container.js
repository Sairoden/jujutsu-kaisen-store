import "../styles/Container.css";
import { Link } from "react-router-dom";
import CartIndicator from "./CartIndicator";

function Container(props) {
  return (
    <div className="container">
      <header>
        <nav>
          <Link to="/">Jujutsu Kaisen Store</Link>
          <div className="nav-right">
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
              <CartIndicator quantity={props.quantity} />
            </Link>
          </div>
        </nav>
      </header>
      {props.children}
    </div>
  );
}

export default Container;
