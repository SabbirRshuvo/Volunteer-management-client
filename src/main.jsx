import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import routes from "./routes/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes} />
    </AuthProvider>
  </StrictMode>
);
