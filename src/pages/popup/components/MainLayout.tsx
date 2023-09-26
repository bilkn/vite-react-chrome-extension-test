import { Box, BoxProps } from "@mui/material";

function MainLayout(
  props: { children: JSX.Element | JSX.Element[] } & BoxProps
) {
  const { children, sx, ...rest } = props;
  return (
    <Box
      sx={{
        p: 5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default MainLayout;
