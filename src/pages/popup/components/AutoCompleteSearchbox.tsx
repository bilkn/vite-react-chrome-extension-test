import {
  Autocomplete,
  AutocompleteProps,
  FormControl,
  Stack,
  useTheme,
} from "@mui/material";
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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { label, options } = props;
  const theme = useTheme();

  // POSSIBLE_TODO: Add button to close and open dropdown menu
  return (
    <Autocomplete
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
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
        /*     endAdornment={
              <Stack
                sx={{
                  transform: `rotateX(${isOpen ? "180" : "0"}deg)`,
                  paddingRight: "1em",
                  height: "100%",
                  pointerEvents: "none",
                }}
              >
                <CustomChevronIcon color={theme.palette.grey["600"]} />
              </Stack>
            } */
          />
        </FormControl>
      )}
      options={options}
    />
  );
}

export default AutoCompleteSearchbox;
