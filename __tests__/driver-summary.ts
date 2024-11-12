import {
  driversPodiums,
  driverStandings,
  noOfRacesPerDriver,
} from "@/__mocks__/driver-standings";
import { driverData, driversSummary } from "@/__mocks__/drivers";
import { emptyArray, emptyMap } from "@/__mocks__/mock-data";
import {
  getDriverInfo,
  getPodiumsPerDriver,
  getRacesEnteredPerDriver,
} from "@/app/utils/driver-summary";

describe("test getDriverInfo function", () => {
  it("returns correct data", () => {
    const drivers = getDriverInfo(driverData);
    expect(drivers).toStrictEqual(driversSummary);
  });

  it("handles an empty prop", () => {
    const drivers = getDriverInfo(emptyArray);
    expect(drivers).toStrictEqual(emptyArray);
  });
});

describe("test getPodiumsPerDriver function", () => {
  it("return expected value", () => {
    const podiums = getPodiumsPerDriver(driverStandings);
    expect(podiums).toStrictEqual(driversPodiums);
  });

  it("handles empty array", () => {
    const podiums = getPodiumsPerDriver(emptyArray);
    expect(podiums).toStrictEqual(emptyMap);
  });
});

describe("test getRacesEnteredPerDriver function", () => {
  it("returns expected value", () => {
    const noOfRacesPerDriverResult = getRacesEnteredPerDriver(driverStandings);
    expect(noOfRacesPerDriverResult).toStrictEqual(noOfRacesPerDriver);
  });

  it("handles empty array", () => {
    const noOfRacesPerDriverResult = getRacesEnteredPerDriver(emptyArray);
    expect(noOfRacesPerDriverResult).toStrictEqual(emptyMap);
  });
});
