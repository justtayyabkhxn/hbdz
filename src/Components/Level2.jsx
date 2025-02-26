import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import { motion } from "framer-motion";
import bg from "../assets/bg2.jpeg";

const Level2 = () => {
  const navigate = useNavigate();

  // Extract stored text from Level 1
  const storedTextLevel1 = localStorage.getItem("scannedText") || "";

  const [scannedText, setScannedText] = useState(
    localStorage.getItem("scannedTextLevel2") || ""
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
          localStorage.setItem("scannedTextLevel2", decodedText);
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

    try {
      const decodedText = await html5QrCode.scanFile(file, false);
      setScannedText(decodedText);
      localStorage.setItem("scannedTextLevel2", decodedText);
    } catch (err) {
      alert("No QR code found in the image. Try another one.");
    } finally {
      html5QrCode.clear(); // Cleanup
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Level Title */}
      <motion.h1
        className="text-3xl font-bold text-yellow-400 mb-4"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        LEVEL 2 🔍
      </motion.h1>

      {/* Riddle Card */}
      <motion.div
        className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg w-full max-w-md text-lg text-center text-yellow-300 italic border border-yellow-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <p>“I have cities but no houses, forests but no trees, and rivers but no water. What am I?”</p>
      </motion.div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col gap-4 w-full max-w-md">
        {/* Get Hint Button */}
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-all">
          Get Hint 💡
        </button>

        {/* Scan QR Code Button */}
        <button
          onClick={() => setShowScanner(true)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
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

        {/* Obtained Text from Level 1 */}
        <input
          type="text"
          value={storedTextLevel1}
          className="w-full p-2 text-center bg-gray-300 text-gray-700 rounded-lg border border-gray-500"
          readOnly
        />

        {/* Uneditable Text Input (Current Level) */}
        <input
          type="text"
          value={scannedText}
          className="w-full p-2 text-center bg-gray-200 text-gray-700 rounded-lg border border-gray-400"
          readOnly
        />

        {/* Move to Next Level Button */}
        <button
          onClick={() => navigate("/level3")}
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

export default Level2;
