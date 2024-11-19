import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

const Spinner = ({ label, isLoading, fullHeight = true }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => setIsVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div
      className={`flex flex-col gap-4 justify-center items-center !bg-white h-screen transition-opacity duration-400 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
      style={{ height: fullHeight ? "100vh" : "20rem" }}
    >
      <Typography variant="h5"> {label} </Typography>
      <div className="flex gap-4">
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Spinner;
