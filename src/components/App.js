import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Shop from "../routes/Shop";
import ProductDetail from "../routes/ProductDetail";
import Cart from "../routes/Cart";
import Container from "./Container";
// List of Products
import products from "../PRODUCTS";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleCartAddition = (productId, quantity) => {
    const productCartIndex = cart.findIndex(item => item.id === productId);
    if (productCartIndex === -1) {
      if (quantity < 1) {
        return;
      }
      const item = {
        ...products[productId],
        quantity,
      };
      setCart([...cart, item]);
    } else {
      const newCart = [...cart];
      const product = newCart[productCartIndex];
      if (product.quantity + quantity < 1) {
        return;
      }
      product.quantity += quantity;
      newCart.splice(productCartIndex, 1, product);
      setCart(newCart);
    }
  };

  const handleQuantityChange = (productCartIndex, quantity) => {
    const newCart = [...cart];
    if (quantity < 1) {
      return;
    }
    const product = newCart[productCartIndex];
    product.quantity = quantity;
    newCart.splice(productCartIndex, 1, product);
    setCart(newCart);
  };

  const handleCartDeletion = productCartIndex => {
    const newCart = [...cart];
    newCart.splice(productCartIndex, 1);
    setCart(newCart);
  };

  const cartLength = cart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity;
  }, 0);

  console.log(cartLength);

  return (
    <div className="App">
      <Switch>
        <Route path="/shop">
          <Container quantity={cartLength}>
            <Shop products={products} />
          </Container>
        </Route>
        <Route path="/product/:name">
          <Container quantity={cartLength}>
            <ProductDetail
              products={products}
              handleCartAddition={handleCartAddition}
            />
          </Container>
        </Route>
        <Route path="/cart">
          <Container quantity={cartLength}>
            <Cart
              cart={cart}
              handleCartAddition={handleCartAddition}
              handleQuantityChange={handleQuantityChange}
              handleCartDeletion={handleCartDeletion}
            />
          </Container>
        </Route>
        <Route path="/">
          <Container quantity={cartLength}>
            <Home />
          </Container>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
