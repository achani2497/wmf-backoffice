"use client";

import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export const BUTTON_ICONS = {
  ADD: <AddOutlinedIcon />,
  DELETE: <DeleteOutlinedIcon />,
  EDIT: <EditOutlinedIcon />,
  CLOTHE: <CheckroomOutlinedIcon />,
};

const WMF_THEME = createTheme({
  palette: {
    black: {
      main: "#000000",
      contrastText: "#FFFFFF",
    },
    white: {
      main: "#FFFFFF",
      contrastText: "#000000",
    },
  },
});

export default function CustomButton({
  variant,
  color,
  label = "",
  icon,
  type = "button",
  customClasses,
  onClick,
}) {
  return (
    <ThemeProvider theme={WMF_THEME}>
      <Button
        variant={variant}
        color={color}
        sx={{
          display: "flex",
          gap: 2,
          width: "fit-content",
          height: "fit-content",
          fontWeight: "600",
          paddingY: 1.5,
        }}
        className={`${customClasses} rounded-[5px]`}
        onClick={onClick}
        type={type}
      >
        {BUTTON_ICONS[icon]}
        {`${label}`}
      </Button>
    </ThemeProvider>
  );
}
