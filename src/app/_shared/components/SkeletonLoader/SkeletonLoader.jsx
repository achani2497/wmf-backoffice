"use client";

import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Spinner from "../Spinner/spinner";

export default function SkeletonLoader() {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-white flex items-center justify-center">
      <Spinner isLoading label={"Cargando ..."} />
    </div>
  );
}
