import { Button, styled } from "@mui/material";
// TODO: fix button text isn't aligned

const CustomButton = styled(Button)(({ theme }) => ({
  "&.Mui-disabled": {
    backgroundColor: "#c5c5c5 !important",
  },
}));
export default CustomButton;
