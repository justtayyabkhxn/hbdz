import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import { motion } from "framer-motion";
import bg from "../assets/bg2.jpeg";

const Level1 = () => {
  const navigate = useNavigate();
  const [scannedText, setScannedText] = useState(
    localStorage.getItem("scannedText") || ""
  );
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    if (showScanner) {
      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: 250 },
        false
      );

      scanner.render(
        (decodedText) => {
          setScannedText(decodedText);
          localStorage.setItem("scannedText", decodedText); // Store in Local Storage
          scanner.clear();
          setShowScanner(false);
        },
        (error) => console.log("QR Scan Error:", error)
      );

      return () => scanner.clear();
    }
  }, [showScanner]);

  // Function to handle QR code from uploaded image
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const html5QrCode = new Html5Qrcode("qr-reader");
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const decodedText = await html5QrCode.scanFile(file, false);
        setScannedText(decodedText);
        localStorage.setItem("scannedText", decodedText);
      } catch (err) {
        alert("No QR code found in the image. Try another one.");
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Level Title */}
      <motion.h1
        className="text-3xl font-bold text-yellow-400 mb-4 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        LEVEL 1 🔍
      </motion.h1>

      {/* Riddle Card */}
      <motion.div
        className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md text-lg text-center text-yellow-300 italic border border-yellow-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p>“The more you take, the more you leave behind. What am I?”</p>
      </motion.div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-4 w-full max-w-md">
        {/* Get Hint Button */}
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-all [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
          Get Hint 💡
        </button>

        {/* Scan QR Code Button */}
        <button
          onClick={() => setShowScanner(true)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]"
        >
          Scan QR Code 📸
        </button>

        {/* QR Scanner Container */}
        {showScanner && <div id="qr-reader" className="w-full max-w-sm"></div>}

        {/* Upload QR Code Image */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full bg-gray-700 text-white py-2 rounded-lg cursor-pointer"
        />

        {/* Uneditable Text Input */}
        <input
          type="text"
          value={scannedText}
          className="w-full p-2 text-center bg-gray-200 text-gray-700 rounded-lg border border-gray-400"
          readOnly
        />

        {/* Move to Next Level Button */}
        <button
          onClick={() => navigate("/level2")}
          className={`w-full py-2 rounded-lg transition-all ${
            scannedText
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-400 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!scannedText} // Disabled if no scanned text
        >
          Move to Next Level 🚀
        </button>
      </div>
    </div>
  );
};

export default Level1;
