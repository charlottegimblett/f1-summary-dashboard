import { CircuitSummary, Race } from "@/types";

export const emptyMap = new Map();

export const emptyArray = [];

export const sampleLapTimes = ["1:22.456", "1:21.456", "1:20.456", "1:21.556"];

const circuitObject: CircuitSummary = {
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
};
export const circuits: Map<number, CircuitSummary> = new Map([
  [1, circuitObject],
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

export const responseFromJsonFile = [
  {
    circuitId: 1,
    circuitRef: "albert_park",
    name: "Albert Park Grand Prix Circuit",
    location: "Melbourne",
    country: "Australia",
    lat: -37.8497,
    lng: 144.968,
    alt: 10,
    url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
  },
  {
    circuitId: 2,
    circuitRef: "sepang",
    name: "Sepang International Circuit",
    location: "Kuala Lumpur",
    country: "Malaysia",
    lat: 2.76083,
    lng: 101.738,
    alt: 18,
    url: "http://en.wikipedia.org/wiki/Sepang_International_Circuit",
  },
];

export const circuitsMap: Map<number, CircuitSummary> = new Map([
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
  [
    2,
    {
      circuitId: 2,
      name: "Sepang International Circuit",
      location: "Kuala Lumpur",
      country: "Malaysia",
      latitude: 2.76083,
      longitude: 101.738,
      altitude: 18,
      url: "http://en.wikipedia.org/wiki/Sepang_International_Circuit",
      noOfRaces: 0,
      fastestLap: "",
    },
  ],
]);

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
