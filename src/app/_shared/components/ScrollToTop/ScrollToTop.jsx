"use client";

import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp } from "@mui/icons-material";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useCallback } from "react";

export default function ScrollToTopFab() {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Zoom in={trigger}>
      <Box
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1,
        }}
      >
        <Fab onClick={scrollToTop} size="large" className="!bg-white">
          <KeyboardArrowUp fontSize="large" />
        </Fab>
      </Box>
    </Zoom>
  );
}
