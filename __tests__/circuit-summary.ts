import {
  expectedCircuitsData,
  expectedCircuitsSummaryMultiple,
} from "@/__mocks__/circuits";
import { lapTimesData } from "@/__mocks__/lap-times";
import {
  emptyArray,
  emptyMap,
  expectedFastestLapsPerCircuit,
  expectedRacesPerCircuit,
} from "@/__mocks__/mock-data";
import { racesData } from "@/__mocks__/races";
import {
  getFastestLapPerCircuit,
  getRacesPerCircuit,
  initialiseCircuits,
  parseTimeString,
} from "@/app/utils/circuit-summary";

describe("test initialiseCircuits function", () => {
  it("returns correct value", () => {
    const circuitsSummary = initialiseCircuits(expectedCircuitsData);
    expect(circuitsSummary).toStrictEqual(expectedCircuitsSummaryMultiple);
  });

  it("works with an empty array", () => {
    const circuitsSummary = initialiseCircuits(emptyArray);
    expect(circuitsSummary).toStrictEqual(emptyArray);
  });
});

describe("test getRacesPerCircuit function", () => {
  it("returns correct value", () => {
    const racesPerCircuit = getRacesPerCircuit(racesData);
    expect(racesPerCircuit).toStrictEqual(expectedRacesPerCircuit);
  });

  it("works with an empty array", () => {
    const racesPerCircuit = getRacesPerCircuit(emptyArray);
    expect(racesPerCircuit).toStrictEqual(emptyMap);
  });
});

describe("test getFastestLapPerCircuit function", () => {
  it("return expected value", () => {
    const fastestLapPerCircuit = getFastestLapPerCircuit(
      racesData,
      lapTimesData
    );
    expect(fastestLapPerCircuit).toStrictEqual(expectedFastestLapsPerCircuit);
  });

  it("works with an empty array", () => {
    const fastestLapPerCircuit = getFastestLapPerCircuit(
      emptyArray,
      emptyArray
    );
    expect(fastestLapPerCircuit).toStrictEqual(emptyMap);
  });
});

describe("test parseTimeString function", () => {
  it("return expected value", () => {
    const parsedTime = parseTimeString("1:30.456");
    expect(parsedTime).toBe(90456);
  });

  it("works with bad value", () => {
    const parsedTime = parseTimeString("1:30:456");
    expect(parsedTime).toBe(-1);
  });

  it("works with empty string", () => {
    const parsedTime = parseTimeString("");
    expect(parsedTime).toBe(-1);
  });
});
