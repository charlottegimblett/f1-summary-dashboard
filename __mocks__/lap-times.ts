import { Lap } from "@/types";

export const lapTimesData: Lap[] = [
  {
    raceId: 1,
    driverId: 20,
    lap: 1,
    position: 1,
    time: "1:38.109",
    milliseconds: 98109,
  },
  {
    raceId: 1,
    driverId: 20,
    lap: 2,
    position: 1,
    time: "1:33.006",
    milliseconds: 93006,
  },
  {
    raceId: 1,
    driverId: 20,
    lap: 3,
    position: 1,
    time: "1:32.717",
    milliseconds: 92713,
  },
  {
    raceId: 2,
    driverId: 20,
    lap: 3,
    position: 1,
    time: "1:32.713",
    milliseconds: 92713,
  },
];

export const lapTimes: Record<number, string[]> = {
  1: [
    "1:40.248",
    "1:33.502",
    "1:34.023",
    "1:33.436",
    "1:33.362",
    "1:35.153",
    "10:44.225",
  ],
};

export const lapTimesWithEmptyValues: Record<number, string[]> = {
  1: [],
};
