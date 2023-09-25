import React from "react";
import { AutoCompleteSearchbox, MainLayout } from "../../components";
import { Autocomplete, IconButton, Stack, Typography } from "@mui/material";
import { mockTimezones } from "@root/src/shared/mocks";

function AddTimeZone() {
  return (
    <MainLayout>
      <Stack>
        <IconButton>{"<--"}</IconButton>
      </Stack>
      <Typography variant="h1">Add new timezone</Typography>
      <AutoCompleteSearchbox
        label="Search timezones"
        options={mockTimezones}
        getOptionLabel={(timezone) => timezone.time}
      />
    </MainLayout>
  );
}

export default AddTimeZone;
