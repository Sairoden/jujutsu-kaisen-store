import "../styles/Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <div className="home">
      <h1>Welcome to Jujutsu Kaisen Store!</h1>
      <Link to="/shop">Find out your character now 🛒</Link>
    </div>
  );
}

export default Home;
