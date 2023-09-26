import React from "react";
import { AutoCompleteSearchbox, MainLayout } from "../../components";
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { LeftArrowIcon } from "../../components/Icons";
import { useSection } from "@root/src/shared/hooks/useSection";
import useAddTimeZoneLogic from "./useAddTimeZoneLogic";

function AddTimeZone() {
  const { updateSection } = useSection();
  const { handlers, timezoneList } = useAddTimeZoneLogic();

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{
        x: window.innerWidth,
        transition: { duration: 0.3, x: { duration: 3 } },
      }}
    >
      <MainLayout>
        <Box>
          <IconButton onClick={() => updateSection("home")}>
            <LeftArrowIcon />
          </IconButton>
        </Box>
        <Typography variant="h1" sx={{ mb: 5, mt: 2 }}>
          Add new timezone
        </Typography>
        <AutoCompleteSearchbox
          label="Search timezones"
          options={timezoneList}
          getOptionLabel={(timezone) => timezone.value}
        />
        <Stack sx={{ mt: 5 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handlers.handleAddNewTimezone}
          >
            Add new timezone
          </Button>
        </Stack>
      </MainLayout>
    </motion.div>
  );
}

export default AddTimeZone;
