import { useState } from "react";

import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import { styled } from "@mui/material/styles";

import { BUTTON_ICONS } from "./Button";

const StyledAvatar = styled(Button)`
  ${({ theme }) => `
  cursor: pointer;
  border: 1px solid #D3302F;
  color: #D3302F;
  transition: ${theme.transitions.create(
    ["background-color", "transform", "width"],
    {
      duration: 700,
    },
  )};
  &:hover {
    background-color: #FCE4E4;
    transform: scaleX(1.000005);
  }
  `}
`;

export default function AnimatedButton({ label = "", onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <StyledAvatar
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {BUTTON_ICONS.DELETE}
      {hover && (
        <Fade in={hover} timeout={600}>
          <span>{label}</span>
        </Fade>
      )}
    </StyledAvatar>
  );
}
