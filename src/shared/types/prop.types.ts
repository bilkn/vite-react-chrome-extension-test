import { FormControlProps, InputProps } from "@mui/material";

export interface ICustomInput extends FormControlProps {
  label: string;
  inputProps?: InputProps;
  warn?: boolean;
  name: string;
  helperText?: string | boolean | undefined;
  type?: string;
  value: string;
}
