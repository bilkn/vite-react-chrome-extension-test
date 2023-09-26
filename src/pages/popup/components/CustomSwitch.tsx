import { Switch, SwitchProps, useTheme } from "@mui/material";

function CustomSwitch(props: SwitchProps) {
  const theme = useTheme();

  return (
    <Switch
      sx={{
        width: 50,
        height: 26,
        padding: "0",
        "& .MuiSwitch-switchBase": {
          padding: "0",
          margin: "3px",
          transitionDuration: "300ms",
          "&.Mui-checked": {
            transform: "translateX(24px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
              backgroundColor: "#4BB542",
              opacity: 1,
              border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: 0.5,
            },
          },
          "&.Mui-focusVisible .MuiSwitch-thumb": {
            border: "6px solid #fff",
          },
          "&.Mui-disabled .MuiSwitch-thumb": {
            color: theme.palette.grey[100],
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.7,
          },
        },
        "& .MuiSwitch-thumb": {
          boxSizing: "border-box",
          width: 20,
          height: 20,
        },
        "& .MuiSwitch-track": {
          borderRadius: 26 / 2,
          backgroundColor: theme.palette.grey[400],
          opacity: 1,
          transition: theme.transitions.create(["background-color"], {
            duration: 500,
          }),
        },
      }}
      {...props}
    />
  );
}

export default CustomSwitch;
