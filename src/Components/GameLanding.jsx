import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/bg3.jpg"; // Replace with your background image
import gif1 from "../assets/gif1.gif"; // Replace with your background image
import gif2 from "../assets/gif2.gif"; // Replace with your background image
import gif3 from "../assets/gif3.gif"; // Replace with your background image

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-pink-400 mb-6 text-center [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        You're Gonna Love it BABY!!!! 🎮✨
      </motion.h1>

      {/* GIFs */}
      <div className="flex space-x-4 mb-6">
        <motion.img
          src={gif1} // Replace with actual path
          alt="GIF 1"
          className="w-24 h-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        
        <motion.img
          src={gif3} // Replace with actual path
          alt="GIF 3"
          className="w-24 h-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </div>

      {/* Start Button */}
      <motion.button
        onClick={() => navigate("/level1")}
        className="bg-pink-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:bg-pink-600 transition-all [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        Start the Game 🚀
      </motion.button>

      <motion.img
          src={gif2} // Replace with actual path
          alt="GIF 2"
          className="w-24 h-24 mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
    </div>
  );
};

export default LandingPage;
