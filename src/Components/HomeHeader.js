import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <header id="header">
      <h1>StrangersThings</h1>
      <nav
        style={{
          width: "200px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to={"/home"}>Home</Link>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/login"}>Login</Link>
      </nav>
    </header>

    //I GOT CONFUSED WITH ROUTES SPECIFICALLY TAKING IN
    // A JS VARIABLE INSTEAD OF FINDING OUT HOW TO CREATE
    // A BUTTON THAT RUNS AND DISPLAYS AN ENTIRELY DIFFERENT
    // JS PAGE
  );
};

export default HomeHeader;

//how do i import the js const LoginPage from the LoginPage.
//js file and use it in the header to where when I press the
//button it runs the LoginPage.js file and displays it
