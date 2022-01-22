import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const RegisterPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        // fetch something and post to a particular endpoint
        try {
          const response = await fetch(
            "https://strangers-things.herokuapp.com/api/2109-OKU-RM-WEB-PT/users/register",
            {
              method: "POST",
              // headers here says hey resource server, incoming javascript object as string
              // '{"username":"value","password":"value"}
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user: { ...form },
              }),
            }
          );

          const resolvedResponse = await response.json();
          const { data } = resolvedResponse;
          const { token } = data;
          // use the message on the frontend for display purposes
          localStorage.setItem("token", token);
          history.push(`/posts`);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="username">Choose Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label htmlFor="password">Choose Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <input type="submit" value="register me!" />
    </form>
  );
};

export default RegisterPage;
