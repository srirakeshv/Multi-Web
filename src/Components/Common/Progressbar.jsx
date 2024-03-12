import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Progressbar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const scrollTop =
        "pageYOffset" in window
          ? window.pageYOffset
          : document.documentElement.scrollTop;

      const scrolled = scrollTop / (documentHeight - windowHeight);
      setProgress(scrolled * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 20 }}>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </div>
  );
};

export default Progressbar;
