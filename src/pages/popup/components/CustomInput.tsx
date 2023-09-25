import {
  FormControl,
  FormLabel,
  Input,
  styled,
  Typography,
} from "@mui/material";
import { ICustomInput } from "@root/src/shared/types/prop.types";
import React from "react";

export const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[400]}`,
  borderRadius: theme.shape.borderRadius,
  marginTop: "3px !important",
  overflow: "hidden",
  input: {
    padding: "10px !important",
    paddingBottom: "9px !important",
    paddingTop: "8px !important",
  },
  "&:hover": {
    borderColor: theme.palette.grey[200],
    boxShadow: theme.shadows[2],
  },
  "&.Mui-focused": {
    borderColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[2],
  },
  "&&.Mui-disabled": {
    backgroundColor: theme.palette.grey[200],
    border: 0,
    boxShadow: theme.shadows[1],
  },
  "&.MuiInputBase-colorWarning, &.Mui-error": {
    borderColor: theme.palette.warning.main,
  },
}));

export const StyledLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.text.primary,
  "&.MuiFormLabel-colorWarning, &&.Mui-error": {
    color: theme.palette.warning.main,
  },
  "&.Mui-focused": {
    color: theme.palette.secondary.main,
  },
}));

// eslint-disable-next-line react/display-name
const CustomInput = React.forwardRef(
  (
    {
      warn,
      label,
      inputProps,
      name,
      helperText,
      type,
      value,
      ...rest
    }: ICustomInput,
    ref
  ) => (
    <FormControl
      color={warn ? "warning" : undefined}
      variant="outlined"
      sx={{ alignItems: "flex-start", width: "100%" }}
      {...rest}
    >
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput
        id={name}
        name={name}
        ref={ref}
        disableUnderline
        fullWidth
        type={type || "text"}
        value={value}
        {...inputProps}
      />
      {!!helperText && (
        <Typography sx={{ mt: "2px" }} color={"warning.main"} variant="caption">
          {helperText}
        </Typography>
      )}
    </FormControl>
  )
);

export default CustomInput;
