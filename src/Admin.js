import { useState } from "react";
import './App.css';

export default function Admin() {
  const [isLogin, setIsLogin] = useState(true);

  // CREATE ACCOUNT STATES
  const [name, setName] = useState("");
  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [secretPassword, setSecretPassword] = useState("");

  // LOGIN STATES
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleCreateAccount = (e) => {
    e.preventDefault();

    if (secretPassword !== "111213141516") {
      alert("Wrong Secret Password");
      return;
    }

    alert("Account Created Successfully");

    console.log({
      name,
      createEmail,
      createPassword,
    });

    setName("");
    setCreateEmail("");
    setCreatePassword("");
    setSecretPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login Successful");

    console.log({
      loginEmail,
      loginPassword,
    });

    setLoginEmail("");
    setLoginPassword("");
  };

  return (
    <div className="admin-container">

      <div className="admin-box">

        <div className="admin-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Sign In
          </button>

          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Create Account
          </button>
        </div>

        {/* ================= LOGIN ================= */}

        {isLogin ? (
          <form className="admin-form" onSubmit={handleLogin}>

            <h2>Admin Sign In</h2>

            <input
              type="email"
              placeholder="Email"
              required
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <button type="submit">
              Sign In
            </button>

          </form>
        ) : (
          /* ================= CREATE ACCOUNT ================= */

          <form className="admin-form" onSubmit={handleCreateAccount}>

            <h2>Create Admin Account</h2>

            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={createEmail}
              onChange={(e) => setCreateEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Secret Password"
              required
              value={secretPassword}
              onChange={(e) => setSecretPassword(e.target.value)}
            />

            <button type="submit">
              Create Account
            </button>

          </form>
        )}

      </div>

    </div>
  );
}