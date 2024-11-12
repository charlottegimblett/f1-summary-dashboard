import { Driver, DriverSummary } from "@/types";

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
