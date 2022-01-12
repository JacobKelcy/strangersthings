import React from "react";

const PostTitle = ({ posts }) => {
  return (
    <div id="SinglePost">
      <h1 id="head">{posts.title}</h1>
      <div id="descript">{posts.description}</div>
      <footer id="price">Price:{posts.price}</footer>
    </div>
  );
};

export default PostTitle;
