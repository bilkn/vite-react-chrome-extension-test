import { Button, Stack, Typography, Paper, Grid } from "@mui/material";
import { MainLayout } from "../../components";
import { mockTimezones } from "@root/src/shared/mocks";
import { motion } from "framer-motion";
import { useSection } from "@root/src/shared/hooks/useSection";

interface ITimezoneData {
  time: string;
  gmt: string;
  region: string;
}

interface ITimezoneCardProps {
  data: ITimezoneData;
}

function TimezoneCard(props: ITimezoneCardProps) {
  const { data } = props;
  return (
    <Paper sx={{ px: 3, py: 2 }}>
      <Typography variant="body1">{data.time}</Typography>
      <Typography variant="body2">{data.gmt}</Typography>
      <Typography variant="body2">{data.region}</Typography>
    </Paper>
  );
}

function Home() {
  const { updateSection } = useSection();

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <MainLayout>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ mb: 5 }}
        >
          <Typography variant="h1">Current timezones</Typography>
          <Button variant="contained" color="secondary">
            Edit
          </Button>
        </Stack>
        <Grid container spacing={4}>
          {mockTimezones.map((timezone, i) => (
            <Grid item key={i} xs={6}>
              <TimezoneCard data={timezone} />
            </Grid>
          ))}
        </Grid>
        <Stack sx={{ mt: 5 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => updateSection("addTimezone")}
          >
            Add new timezone
          </Button>
        </Stack>
      </MainLayout>
    </motion.div>
  );
}

export default Home;
