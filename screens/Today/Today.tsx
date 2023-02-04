import React from "react";
import { Box, Heading } from "native-base";

const Today = () => {
  const getTodaysDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getRandomColor = () => {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
  };

  return (
    <Box safeArea height="100%" width="100%" bg="#2e3138">
      <Heading alignSelf='center' color={getRandomColor()}>{getTodaysDate()}</Heading>
    </Box>
  );
};
export default Today;
