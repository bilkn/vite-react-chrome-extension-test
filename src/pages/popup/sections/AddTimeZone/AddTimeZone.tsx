import { CustomButton, MainLayout } from "../../components";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { LeftArrowIcon } from "../../components/Icons";
import { useSection } from "@root/src/shared/hooks/useSection";
import useAddTimeZoneLogic from "./useAddTimeZoneLogic";
import { useTimezone } from "@root/src/shared/hooks/useTimeZone";
import timezoneJSON from "@root/src/shared/constants/timeZones.json";
import AutoCompleteSearchbox from "../../components/AutoCompleteSearchbox";

function AddTimeZone() {
  const { updateSection } = useSection();
  const { handlers, timezone } = useAddTimeZoneLogic();
  const { handlers: timeZoneHandlers } = useTimezone();

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
        <Box sx={{ minHeight: "300px" }}>
          <AutoCompleteSearchbox
            label="Search timezones"
            options={timezoneJSON}
            getOptionLabel={(timezone) => timezone.value}
            onChange={handlers.handleTimeZoneChange}
          />
        </Box>
        <Stack sx={{ mt: 5 }}>
          <CustomButton
            variant="contained"
            color="primary"
            onClick={() => timeZoneHandlers.handleAddNewTimezone(timezone)}
            disabled={!timezone}
          >
            Add new timezone
          </CustomButton>
        </Stack>
      </MainLayout>
    </motion.div>
  );
}

export default AddTimeZone;
