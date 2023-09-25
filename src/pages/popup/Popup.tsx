import React from "react";
import "@pages/popup/Popup.css";
import withSuspense from "@src/shared/hoc/withSuspense";
import { AddTimeZone, Home } from "./sections";
import { Box, ThemeProvider } from "@mui/material";
import theme from "@root/src/shared/style/theme";

const Popup = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Home />
       {/*  <AddTimeZone /> */}
      </Box>
    </ThemeProvider>
  );
};

export default withSuspense(Popup);
