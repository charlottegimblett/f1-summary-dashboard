import {
  expectedDriversPodiums,
  driverStandings,
  expectedNoOfRacesPerDriver,
} from "@/__mocks__/driver-standings";
import { driverData, expectedDriversSummary } from "@/__mocks__/drivers";
import { emptyArray, emptyMap } from "@/__mocks__/mock-data";
import {
  initialiseDrivers,
  getPodiumsPerDriver,
  getRacesEnteredPerDriver,
} from "@/app/utils/driver-summary";

describe("test getDriverInfo function", () => {
  it("returns correct data", () => {
    const drivers = initialiseDrivers(driverData);
    expect(drivers).toStrictEqual(expectedDriversSummary);
  });

  it("handles an empty array", () => {
    const drivers = initialiseDrivers(emptyArray);
    expect(drivers).toStrictEqual(emptyArray);
  });
});

describe("test getPodiumsPerDriver function", () => {
  it("return expected value", () => {
    const podiumsPerDriver = getPodiumsPerDriver(driverStandings);
    expect(podiumsPerDriver).toStrictEqual(expectedDriversPodiums);
  });

  it("handles empty array", () => {
    const podiumsPerDriver = getPodiumsPerDriver(emptyArray);
    expect(podiumsPerDriver).toStrictEqual(emptyMap);
  });
});

describe("test getRacesEnteredPerDriver function", () => {
  it("returns expected value", () => {
    const racesEnteredPerDriver = getRacesEnteredPerDriver(driverStandings);
    expect(racesEnteredPerDriver).toStrictEqual(expectedNoOfRacesPerDriver);
  });

  it("handles empty array", () => {
    const racesEnteredPerDriver = getRacesEnteredPerDriver(emptyArray);
    expect(racesEnteredPerDriver).toStrictEqual(emptyMap);
  });
});
