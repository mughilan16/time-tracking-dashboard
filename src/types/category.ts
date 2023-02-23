import type { hoursFormat } from "./hoursFormat";

export interface category {
  name: string;
  daily: hoursFormat;
  weekly: hoursFormat;
  monthly: hoursFormat;
}
