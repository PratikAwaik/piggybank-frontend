import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../../requests/users";

const Register = ({ currentUser, setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate({ pathname: "/dashboard" });
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
    };

    const response = await registerRequest(data);
    if (response.error) {
      setError(response.error);
    } else {
      window.localStorage.setItem("bankUser", JSON.stringify(response));
      setCurrentUser(response);
      navigate({ pathname: "/dashboard" });
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="shadow-lg border border-slate-300 p-4 rounded-md">
        <form onSubmit={handleSubmit}>
          <h3 className="text-3xl mb-6 text-center mt-3">Create an Account</h3>
          <div className="mb-4 flex flex-col items-start">
            <div className="flex flex-col items-start w-full mb-4">
              <label htmlFor="username" className="mb-1 font-bold">
                Username
              </label>
              <input
                autoComplete="off"
                className={`w-full p-2 bg-transparent border-2 rounded-md outline-none focus-within::bg-transparent`}
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
                required
              />
            </div>

            <div className="flex flex-col items-start w-full mb-4">
              <label htmlFor="email" className="mb-1 font-bold">
                Email
              </label>
              <input
                autoComplete="off"
                className={`w-full p-2 bg-transparent border-2 rounded-md outline-none focus-within::bg-transparent`}
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </div>

            <div className="flex flex-col items-start w-full mb-4">
              <label htmlFor="password" className="mb-1 font-bold">
                Password
              </label>
              <input
                autoComplete="off"
                className={`w-full p-2 bg-transparent border-2 rounded-md outline-none focus-within::bg-transparent`}
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                required
              />
            </div>

            <div className="w-full flex items-center flex-col">
              <button
                type="submit"
                className="bg-blue-800 rounded-md text-white px-5 py-2 mb-6"
              >
                Sign Up
              </button>
              <p className="text-center">
                Already Signed up?
                <Link className="text-blue-800 underline ml-1" to="/login">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </form>
        {error && (
          <div className="w-full bg-red-500 p-2 text-white rounded-md text-center">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
