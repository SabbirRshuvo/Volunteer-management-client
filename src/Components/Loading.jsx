import React from "react";
import { FaSpinner } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Loading = ({ message = "Loading" }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-100">
      <Fade triggerOnce>
        <div className="flex flex-col items-center space-y-4">
          {/* Spinner */}
          <FaSpinner className="animate-spin text-4xl text-primary" />

          {/* Message */}
          <p className="text-lg text-base-content font-medium">{message}</p>
        </div>
      </Fade>
    </div>
  );
};

export default Loading;
