import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./screens/LoginPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/home" component={HomeScreen} />
        <Route exact path="/posts" component={HomeScreen} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1

// step 1 consume API
// step 2 display data using React components
// step 3 create single page view for comments and ratings
// step 4 design schema for users and comments
