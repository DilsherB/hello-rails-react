import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/greeting">
        <button>Greeting</button>
      </Link>
      <p>Here comes the random greetings</p>
    </div>
  );
};

export default Home;
