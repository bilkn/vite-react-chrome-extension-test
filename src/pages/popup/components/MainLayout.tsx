import { Box } from "@mui/material";
import React from "react";

function MainLayout(props: { children: JSX.Element | JSX.Element[] }) {
  return <Box sx={{ p: 5 }}>{props.children}</Box>;
}

export default MainLayout;
