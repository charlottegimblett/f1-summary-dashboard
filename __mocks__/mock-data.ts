import { CircuitSummary, Driver, DriverSummary, Race } from "@/types";

export const emptyMap = new Map();

export const emptyArray = [];

export const sampleLapTimes = ["1:22.456", "1:21.456", "1:20.456", "1:21.556"];

export const circuits: Map<number, CircuitSummary> = new Map([
  [
    1,
    {
      circuitId: 1,
      name: "Albert Park Grand Prix Circuit",
      location: "Melbourne",
      country: "Australia",
      latitude: -37.8497,
      longitude: 144.968,
      altitude: 10,
      url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
      noOfRaces: 0,
      fastestLap: "",
    },
  ],
]);

export const circuitLapTimes: Record<number, string[]> = {
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

export const circuitLapTimesWithEmptyValues: Record<number, string[]> = {
  1: [],
};

export const racesData: Race[] = [
  {
    raceId: 1,
    year: 1954,
    round: 8,
    circuitId: 1,
    name: "Albert Park Grand Prix Circuit",
    date: "1954-09-05",
    time: "\\N",
    url: "http://en.wikipedia.org/wiki/1954_Italian_Grand_Prix",
    fp1_date: "\\N",
    fp1_time: "\\N",
    fp2_date: "\\N",
    fp2_time: "\\N",
    fp3_date: "\\N",
    fp3_time: "\\N",
    quali_date: "\\N",
    quali_time: "\\N",
    sprint_date: "\\N",
    sprint_time: "\\N",
  },
  {
    raceId: 2,
    year: 1954,
    round: 8,
    circuitId: 1,
    name: "Albert Park Grand Prix Circuit",
    date: "1954-09-05",
    time: "\\N",
    url: "http://en.wikipedia.org/wiki/1954_Italian_Grand_Prix",
    fp1_date: "\\N",
    fp1_time: "\\N",
    fp2_date: "\\N",
    fp2_time: "\\N",
    fp3_date: "\\N",
    fp3_time: "\\N",
    quali_date: "\\N",
    quali_time: "\\N",
    sprint_date: "\\N",
    sprint_time: "\\N",
  },
];

export const driverData: Driver[] = [
  {
    driverId: 1,
    driverRef: "hamilton",
    number: "44",
    code: "HAM",
    forename: "Lewis",
    surname: "Hamilton",
    dob: "1985-01-07",
    nationality: "British",
    url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
  },
  {
    driverId: 2,
    driverRef: "heidfeld",
    number: "\\N",
    code: "HEI",
    forename: "Nick",
    surname: "Heidfeld",
    dob: "1977-05-10",
    nationality: "German",
    url: "http://en.wikipedia.org/wiki/Nick_Heidfeld",
  },
];

export const driversSummary: DriverSummary[] = [
  {
    driverId: 1,
    number: 44,
    firstName: "Lewis",
    lastName: "Hamilton",
    dob: "1985-01-07",
    nationality: "British",
    url: "http://en.wikipedia.org/wiki/Lewis_Hamilton",
  },
  {
    driverId: 2,
    number: -1,
    firstName: "Nick",
    lastName: "Heidfeld",
    dob: "1977-05-10",
    nationality: "German",
    url: "http://en.wikipedia.org/wiki/Nick_Heidfeld",
  },
];
