import { Toaster } from "react-hot-toast";

export const Toast = () => (
  <Toaster
    position="top-right"
    toastOptions={{
      className: "rounded-xl shadow-md font-medium",
      success: { style: { background: "#22c55e", color: "#fff" } },
      error: { style: { background: "#ef4444", color: "#fff" } },
    }}
  />
);
