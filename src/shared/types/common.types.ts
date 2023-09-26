import { DateTime } from "luxon";

export interface ITimezone {
  name: string;
  region: string;
  utc: string;
  date: null | DateTime;
}
