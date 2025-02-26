import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/login.css";
import birthdayGif from "../assets/birthday.png";
import pic1 from "../assets/pic1.png";
import bg from "../assets/bg.jpg";
const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showHint, setShowHint] = useState(false);
  const correctPassword = "01042003"; // Change this as needed

  const handleLogin = () => {
    if (password === correctPassword) {
      navigate("/rules"); // Redirect to Rules page on success
    } else {
      alert("Oops! Wrong password. Try again! 😊");
    }
  };

  return (
    <div
      className="flex flex-col items-center  min-h-svh p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.img
        src={pic1}
        alt="Tayyab"
        className="w-20 h-20 shadow-2xl rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Animated Birthday GIF */}
      <motion.img
        src={birthdayGif}
        alt="Happy Birthday!"
        className="w-150 h-100 mb-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Cute Welcome Message */}
      <motion.h1
        className="text-3xl font-bold text-pink-300 mb-4 text-center [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] "
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome, Mish Zoya!!!!  💖
      </motion.h1>

      {/* Login Form */}
      <div className="bg-white/1 backdrop-blur-md drop-shadow-2xl p-6 rounded-2xl w-full max-w-sm shadow-lg">
        {/* Hardcoded Username Field */}
        <label className="block text-orange-400  [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] font-semibold">Username</label>
        <input
          type="text"
          value="miss22yearoldzoya@tayyab.love"
          readOnly
          className="w-full px-4 py-2 border-none rounded-lg bg-gray-100 text-pink-500 cursor-not-allowed"
        />

        {/* Password Input */}
        <label className="block mt-4 text-orange-400  [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] font-semibold">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border-none rounded-lg bg-gray-100 focus:outline-none focus:ring-2 text-pink-500 focus:ring-pink-500"
        />

        {/* Password Hint Button */}
        <button
          onClick={() => setShowHint(!showHint)}
          className="mt-2 text-pink-300 text-sm underline"
        >
          {showHint ? "Hide Hint" : "Show Password Hint"}
        </button>
        {showHint && (
          <p className="block mt-4 text-orange-400  [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] font-semibold">
            Comeon It's your Birthday 😉
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-pink-500 text-white py-2 mt-4 rounded-lg hover:bg-pink-600 transition-all [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]"
        >
          Get In 💕
        </button>
      </div>
      {/* <div className="block mt-4 text-lg text-red-700  [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)] font-semibold font-semibold">
        -&gt;Made by Tayyab Khan
      </div> */}
    </div>
  );
};

export default Login;
