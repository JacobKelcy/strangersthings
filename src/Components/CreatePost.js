import React, { useState } from "react";
// {
//   posts, setPosts;
// }
const CreatePost = () => {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);
  const [price, setPrice] = useState([]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log("title, body, price: ", title, body, price);
    const response = await fetch(
      "https://strangers-things.herokuapp.com/api/2109-oku-rm-web-pt/posts",
      {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          title,
          body,
        }),
      }
    );
    const data = await response.json();
    console.log("data: ", data);
    // setPosts([data, ...posts]);
  };

  return (
    <>
      <h3>Create a Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        ></input>
        <input
          type="text"
          placeholder="body"
          value={body}
          onChange={(ev) => setBody(ev.target.value)}
        ></input>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        ></input>
        <button
          type="submit"
          className="btn
    btn-outline-primary"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
