"use client";

import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";

const BUTTONS = {
  ADD: <AddOutlinedIcon />,
  DELETE: <DeleteOutlinedIcon />,
  EDIT: <EditOutlinedIcon />,
  CLOTHE: <CheckroomOutlinedIcon />,
};

export default function CustomButton({
  variant,
  color,
  label,
  icon,
  type = "button",
  customClasses,
  onClick,
}) {
  return (
    <Button
      variant={variant}
      color={color}
      sx={{
        display: "flex",
        gap: 2,
        width: "fit-content",
        height: "fit-content",
        borderRadius: 24,
        fontWeight: "600",
        paddingY: 1.5,
      }}
      className={customClasses}
      onClick={onClick}
      type={type}
    >
      {BUTTONS[icon]}
      {`${label}`}
    </Button>
  );
}
