import React from "react";
import withSuspense from "@src/shared/hoc/withSuspense";
import { ThemeProvider } from "@mui/material";
import theme from "@root/src/shared/style/theme";
import { SectionProvider } from "@root/src/shared/hooks/useSection";
import Sections from "./Sections";
import { AnimatePresence } from "framer-motion";
import { TimezoneProvider } from "@root/src/shared/hooks/useTimeZone";

const Popup = () => {
  return (
    <ThemeProvider theme={theme}>
      <SectionProvider>
        <TimezoneProvider>
          <AnimatePresence>
            <Sections />
          </AnimatePresence>
        </TimezoneProvider>
      </SectionProvider>
    </ThemeProvider>
  );
};

export default withSuspense(Popup);
