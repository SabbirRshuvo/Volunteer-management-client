/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-white px-4 text-center">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-[120px] font-bold text-red-400 drop-shadow-md"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-700 mb-6"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-400 text-white rounded-full hover:bg-red-500 transition-all duration-200"
        >
          <FaArrowLeft /> Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Error;
