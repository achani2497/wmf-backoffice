"use client";

import Link from "next/link";

import Button from "@mui/material/Button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

export default function EventLayout({ children }) {
  return (
    <div className="flex flex-col gap-4 items-start flex-1">
      <Link href={"/"} className="!text-black">
        <Button
          startIcon={<ArrowBackIosOutlinedIcon />}
          variant="text"
          color="inherit"
        >
          Eventos
        </Button>
      </Link>
      {children}
    </div>
  );
}
