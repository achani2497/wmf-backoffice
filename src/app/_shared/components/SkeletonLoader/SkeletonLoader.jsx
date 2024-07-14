import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function SkeletonLoader() {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-white flex items-center justify-center">
      <CircularProgress />
    </div>
  );
}
