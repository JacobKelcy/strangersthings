import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <>
      <header id="header">
        <h1>StrangersThings</h1>
        <h1>Home</h1>
        <h1>Posts</h1>

        <Link to="/">Login</Link>
      </header>
    </>
  );
};

export default HomeHeader;
