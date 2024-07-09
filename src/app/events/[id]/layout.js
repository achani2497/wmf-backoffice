"use client";

import { useRouter } from "next/navigation";

import Button from "@mui/material/Button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

export default function EventLayout({ children }) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 items-start">
      <Button
        startIcon={<ArrowBackIosOutlinedIcon />}
        variant="text"
        onClick={() => router.push("/")}
      >
        Eventos
      </Button>
      {children}
    </div>
  );
}
