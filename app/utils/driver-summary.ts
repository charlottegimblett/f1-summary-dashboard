import { Driver, DriverSummary, Race, Standing } from "@/types";
import { loadData } from "./data-processing";

export async function getDriverSummaryData() {
  const [driversData, driverStandingsData] = await Promise.all([
    loadData("public/data/drivers.json"),
    loadData("public/data/driver_standings.json"),
  ]);

  const [drivers, driversPodiums, racesPerDriver] = await Promise.all([
    initialiseDrivers(driversData),
    getPodiumsPerDriver(driverStandingsData),
    getRacesEnteredPerDriver(driverStandingsData),
  ]);

  return { drivers, driversPodiums, racesPerDriver };
}

export function initialiseDrivers(driversData: Driver[]): DriverSummary[] {
  return driversData.map((driver) => ({
    driverId: driver.driverId,
    firstName: driver.forename,
    lastName: driver.surname,
    number: driver.number === "\\N" ? -1 : Number(driver.number),
    nationality: driver.nationality,
    dob: driver.dob,
    url: driver.url,
  }));
}

export function getPodiumsPerDriver(driverStandingsData: Standing[]) {
  const podiums = new Map<number, number>();

  driverStandingsData.forEach((standing) => {
    if (standing.position <= 3) {
      const count = podiums.get(standing.driverId) || 0;
      podiums.set(standing.driverId, count + 1);
    }
  });

  return podiums;
}

export function getRacesEnteredPerDriver(standingsData: Standing[]) {
  const driverRaceCount = new Map<number, Set<number>>();

  standingsData.forEach((standing) => {
    const raceSet = driverRaceCount.get(standing.driverId) || new Set();
    raceSet.add(standing.raceId);
    driverRaceCount.set(standing.driverId, raceSet);
  });

  const racesEnteredPerDriver = new Map<number, number>();
  driverRaceCount.forEach((raceSet, driverId) => {
    racesEnteredPerDriver.set(driverId, raceSet.size);
  });

  return racesEnteredPerDriver;
}
