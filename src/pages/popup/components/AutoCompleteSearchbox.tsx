import { Autocomplete, AutocompleteProps, FormControl } from "@mui/material";
import React from "react";
import { StyledInput, StyledLabel } from "./CustomInput";

interface AutoCompleteSearchBoxProps<T>
  extends Omit<
    AutocompleteProps<T, undefined, undefined, undefined>,
    "renderInput"
  > {
  label: string;
  loading?: boolean;
  options: T[] | [];
  getOptionLabel?: ((option: T) => string) | undefined;
}

function AutoCompleteSearchbox<T>(props: AutoCompleteSearchBoxProps<T>) {
  const { label, options } = props;

  return (
    <Autocomplete
      {...props}
      renderInput={(params) => (
        <FormControl
          sx={{
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <StyledLabel>{label}</StyledLabel>
          <StyledInput
            inputProps={params.inputProps}
            ref={params.InputProps.ref}
            disableUnderline
            fullWidth
            placeholder={props.placeholder}
          />
        </FormControl>
      )}
      options={options}
    />
  );
}

export default AutoCompleteSearchbox;
