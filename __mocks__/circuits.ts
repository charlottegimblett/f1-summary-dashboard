import { CircuitSummary } from "@/types";

export const expectedCircuitsData = [
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

export const expectedCircuitsSummaryMultiple: CircuitSummary[] = [
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
];

export const expectedCircuitsSummarySingle: Map<number, CircuitSummary> =
  new Map([
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
