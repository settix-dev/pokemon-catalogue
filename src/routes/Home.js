import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome to our Poke Api. Please head over to
        <Link to="/berries">/berries</Link> to see our catalog.
      </p>
    </>
  );
};

export default Home;
