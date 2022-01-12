import React, { useState, useEffect } from "react";
import PostTitle from "../Components/PostTitle";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  const URL =
    "https://strangers-things.herokuapp.com/api/2109-oku-rm-web-pt/posts";

  async function fetchPosts(url) {
    const posts = await fetch(url);
    return posts.json();
  }

  useEffect(() => {
    fetchPosts(URL).then((res) => {
      setPosts([...res.data.posts]);
    });
  }, []);

  console.log(posts);

  // were going to map through posts and
  // for every post were gonna return a react
  //component wiht the post being passed as props.

  return (
    <div id="main">
      {posts.map((posts, idx) => {
        console.log(posts.title);
        return <PostTitle key={idx} posts={posts} />;
      })}
    </div>
  );
};
export default HomeScreen;
