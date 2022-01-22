import React, { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        // fetch something and post to a particular endpoint
        try {
          const response = await fetch(
            "https://strangers-things.herokuapp.com/2109-OKU-RM-WEB-PT/api/login",
            {
              method: "POST",
              body: JSON.stringify(form),
            }
          );
          const { token } = response.json();
          localStorage.setItem("token", token);
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
    </form>
  );
};

export default LoginPage;
