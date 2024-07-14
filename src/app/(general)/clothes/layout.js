"use client";

import { useSearchParams } from "next/navigation";
import Button from "@mui/material/Button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import Link from "next/link";

export default function Layout({ children }) {
  const router = useSearchParams();
  const eventId = router.get("eventId");
  return (
    <div className="flex flex-col gap-4 items-start">
      <Link href={`/events/${eventId}`}>
        <Button startIcon={<ArrowBackIosOutlinedIcon />} variant="text">
          Volver al evento
        </Button>{" "}
      </Link>
      {children}
    </div>
  );
}
