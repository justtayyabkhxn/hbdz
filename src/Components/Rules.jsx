import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/bg2.jpeg";
import image1 from "../assets/cutout1.png";
import image2 from "../assets/cutout2.png";
import image3 from "../assets/cutout3.png";
import image4 from "../assets/cutout4.png";
import image5 from "../assets/cutout5.png";
import image6 from "../assets/cutout6.png";
import image7 from "../assets/cutout7.png";

const Rules = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Upper Cutout Images */}
      <div className="flex space-x-4 mb-4">
        <motion.img
          src={image1}
          alt="Cutout 1"
          className="w-20 h-20 rotate-25"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={image2}
          alt="Cutout 2"
          className="w-20 h-20 mt-5"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.img
          src={image3}
          alt="Cutout 3"
          className="w-20 h-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>

      {/* Title */}
      <motion.h1
        className="text-3xl font-bold text-orange-300 mb-1 text-center [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Treasure Hunt Rules 🏆✨
      </motion.h1>

      {/* Rules Container */}
      <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md text-pink-500 text-lg [text-shadow:_0_0.5px_0.5px_rgb(0_0_0_/_0.8)]">
        {/* Image 7 in the Top-Left Corner */}
        <motion.img
          src={image7}
          alt="Cutout 7"
          className="absolute -top-8 -left-8 w-24 h-24 rotate-[-15deg]" // Positioned to top-left
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <ul className="list-disc pl-5 space-y-3">
          <li>----&gt;Each level contains a riddle or a clue to solve.</li>
          <li>You must crack the riddle to reach the next level.</li>
          <li>Clues might be hidden anywhere.</li>
          <li>The hint is with you, but you need to offer something to get it.</li>
          <li>Find the hidden QR codes and scan them.</li>
          <li>Have fun and enjoy this special birthday surprise! 🎉💕</li>
        </ul>

        {/* Start Button */}
        <button
          onClick={() => navigate("/game")}
          className="w-full bg-pink-500 text-white py-2 mt-4 rounded-lg hover:bg-pink-600 transition-all [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]"
        >
          Get Started 🚀
        </button>
      </div>

      {/* Lower Cutout Images */}
      <div className="flex space-x-4 mt-4">
        <motion.img
          src={image4}
          alt="Cutout 4"
          className="w-20 h-20 mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={image5}
          alt="Cutout 5"
          className="w-20 h-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.img
          src={image6}
          alt="Cutout 6"
          className="w-20 h-20 mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>
    </div>
  );
};

export default Rules;
