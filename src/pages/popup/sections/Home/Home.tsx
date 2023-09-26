import { Stack, Typography, Paper, Grid, IconButton } from "@mui/material";
import { CustomButton, CustomSwitch, MainLayout } from "../../components";
import { motion } from "framer-motion";
import { useSection } from "@root/src/shared/hooks/useSection";
import useHomeLogic from "./useHomeLogic";
import { ITimezone } from "@root/src/shared/types/common.types";
import { CircledCancel } from "../../components/Icons";
import { useTimezone } from "@root/src/shared/hooks/useTimeZone";

interface ITimezoneCardProps {
  data: ITimezone;
  enableEdit?: boolean;
}

function TimezoneCard(props: ITimezoneCardProps) {
  const { data, enableEdit = false } = props;
  const { handlers } = useTimezone();
  return (
    <Paper
      sx={{
        px: 3,
        py: 2,
        position: "relative",
      }}
    >
      <Typography variant="body1">{data.date.toFormat("hh:mm:ss")}</Typography>
      <Typography variant="body2">{data.utc}</Typography>
      <Typography
        variant="body2"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
        }}
      >
        {data.region}
      </Typography>
      {enableEdit && (
        <IconButton
          sx={{ position: "absolute", top: "-18px", right: "-12px" }}
          onClick={() => handlers.handleRemoveTimezone(data)}
        >
          <CircledCancel color={"red"} />
        </IconButton>
      )}
    </Paper>
  );
}

function Home() {
  const { updateSection } = useSection();
  const { times, handlers, enableEdit } = useHomeLogic();

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <MainLayout sx={{ px: "0", py: 5 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ mb: 5, px: 5 }}
        >
          <Typography variant="h1">Current timezones</Typography>
          <Stack sx={{ flexDirection: "row" }}>
            <Stack alignItems="center" sx={{ flexDirection: "row" }}>
              <Typography variant="body2" sx={{ mr: 2 }}>
                Edit
              </Typography>
              <CustomSwitch onChange={handlers.toggleEdit} />
            </Stack>
          </Stack>
        </Stack>
        <Grid
          container
          spacing={4}
          sx={{
            overflowY: times.length >= 8 ? "auto" : "visible",
            overflowX: "visible",
            maxHeight: "445px",
            px: 5,
          }}
        >
          {times.map((timezone, i) => (
            <Grid item key={i} xs={6}>
              <TimezoneCard data={timezone} enableEdit={enableEdit} />
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ mt: "auto", px: 5, pt: 5 }}>
          <CustomButton
            variant="contained"
            color="primary"
            onClick={() => updateSection("addTimezone")}
          >
            Add new timezone
          </CustomButton>
        </Stack>
      </MainLayout>
    </motion.div>
  );
}

export default Home;
