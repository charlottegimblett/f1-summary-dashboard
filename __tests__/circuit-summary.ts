import { circuitsData, circuitsSummaryMap } from "@/__mocks__/circuits";
import {
  circuitLapTimes,
  circuitLapTimesWithEmptyValues,
  circuits,
  emptyArray,
  emptyMap,
  racesData,
  sampleLapTimes,
} from "@/__mocks__/mock-data";
import {
  getFastestLap,
  initialiseCircuits,
  mapRaceIdToCircuitId,
  updateFastestLaps,
} from "@/app/utils/circuit-summary";
import { loadData } from "@/app/utils/data-processing";
import { CircuitSummary } from "@/types";

describe("test loadData function", () => {
  it("returns expected object", () => {
    const circuitsResponse = loadData("__mocks__/mock-circuits.json");
    expect(circuitsResponse).toStrictEqual(circuitsData);
  });

  it("incorrect path", () => {
    const circuitsResponse = loadData("");
    expect(circuitsResponse).toBe(undefined);
  });
});

describe("test initialiseCircuits function", () => {
  it("returns correct value", () => {
    const result = initialiseCircuits(circuitsData);
    expect(result).toStrictEqual(circuitsSummaryMap);
  });

  it("empty json object", () => {
    const result = initialiseCircuits(emptyArray);
    expect(result).toStrictEqual(emptyMap);
  });
});

describe("test mapRaceIdToCircuitId", () => {
  it("returns correct value", () => {
    const foo = mapRaceIdToCircuitId(racesData, circuitsSummaryMap);
    const bar: Record<number, number> = { 1: 1, 2: 1 };
    expect(foo).toStrictEqual(bar);
  });

  it("passed empty values", () => {
    const foo = mapRaceIdToCircuitId(emptyArray, emptyMap);
    const bar: Record<number, number> = {};
    expect(foo).toStrictEqual(bar);
  });
});

describe("test getFastestLap function", () => {
  it("returns correct value", () => {
    const fastestLap = getFastestLap("1:20:890", "1:22:890");
    expect(fastestLap).toBe("1:20:890");
  });

  it("empty values", () => {
    const fastestLap = getFastestLap("", "");
    expect(fastestLap).toBe("");
  });

  it("happy use case", () => {
    const fastestLap = sampleLapTimes.reduce(getFastestLap);
    expect(fastestLap).toBe("1:20.456");
  });
});

describe("test updateFastestLaps function", () => {
  it("returns correct array", () => {
    const updatedCircuits = updateFastestLaps(circuits, circuitLapTimes);

    expect(updatedCircuits).toStrictEqual([
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
        fastestLap: "1:33.362",
      },
    ]);
  });

  it("returns correct array wth empty values", () => {
    const updatedCircuits = updateFastestLaps(
      circuits,
      circuitLapTimesWithEmptyValues
    );

    expect(updatedCircuits).toStrictEqual([
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
    ]);
  });
});
