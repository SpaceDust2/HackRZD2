'use client'
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-8"
      >
        <motion.h1
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold bg-gradient-to-r text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(-45deg, #ff008c, #ff4560, #ff8c00, #ffd500, #9eff00, #00ff6a, #00ffc3, #00d5ff, #008aff, #4e00ff, #b300ff, #ff00e1)",
            backgroundSize: "400% 400%",
            animation: "rainbow 10s ease-in-out infinite"
          }}
        >
          RZD
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link href="/admin">
          <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition duration-300">
            Войти
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage;


