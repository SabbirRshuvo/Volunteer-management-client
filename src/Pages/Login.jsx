/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Google login failed.");
    }
  };

  // Email Password Signin
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      //User Login
      await signIn(email, password);
      toast.success("Logged in successfully!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error("Invalid email or password.");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-200 via-purple-200 to-pink-200">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-2xl border border-purple-200">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSignIn} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? (
                  <IoMdEyeOff className="h-5 w-5 text-gray-500" />
                ) : (
                  <FaEye className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white font-bold uppercase tracking-wide"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn w-full mt-2 bg-red-500 hover:bg-red-600 text-white font-bold"
          >
            <FaGoogle /> Continue with Google
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-purple-600 hover:underline font-medium"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
