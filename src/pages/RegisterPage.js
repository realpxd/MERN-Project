import React, {  useState } from "react";
// import { Link } from 'react-router-dom';

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fname, email);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
          // change current url to /Home
          localStorage.setItem("name", fname);
          localStorage.setItem("email", email);

          console.log(localStorage.getItem("name"));

          setTimeout(() => {
            window.location.href = "./Home";
          }, 1000);

      });
  
      setTimeout(() => {
        window.location.href = "./Home";
      }, 1000);
    };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <img src="./login.png" alt="illustration" />

          <div className="inputField iName">
            <label>Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="inputField iEmail">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="email@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="auth-submitBtn">
            {/* <Link to="/Home" className=""> */}
            <button type="submit" className="btn btn-primary">
              Continue
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
}
