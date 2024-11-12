import { Standing } from "@/types";

export const driverStandings: Standing[] = [
  {
    driverStandingsId: 1,
    raceId: 1,
    driverId: 1,
    points: 10,
    position: 1,
    positionText: 1,
    wins: 1,
  },
  {
    driverStandingsId: 2,
    raceId: 1,
    driverId: 2,
    points: 8,
    position: 2,
    positionText: 2,
    wins: 0,
  },
  {
    driverStandingsId: 3,
    raceId: 1,
    driverId: 3,
    points: 0,
    position: 10,
    positionText: 10,
    wins: 0,
  },
  {
    driverStandingsId: 3,
    raceId: 2,
    driverId: 1,
    points: 0,
    position: 15,
    positionText: 15,
    wins: 1,
  },
  {
    driverStandingsId: 4,
    raceId: 2,
    driverId: 2,
    points: 0,
    position: 15,
    positionText: 15,
    wins: 0,
  },
  {
    driverStandingsId: 5,
    raceId: 2,
    driverId: 3,
    points: 0,
    position: 15,
    positionText: 15,
    wins: 0,
  },

  {
    driverStandingsId: 6,
    raceId: 3,
    driverId: 1,
    points: 10,
    position: 1,
    positionText: 1,
    wins: 2,
  },
];

export const driversPodiums = new Map([
  [1, 2],
  [2, 1],
]);

export const noOfRacesPerDriver = new Map([
  [1, 3],
  [2, 2],
  [3, 2],
]);
