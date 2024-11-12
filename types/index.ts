export interface CircuitSummary {
  circuitId: number;
  name: string;
  location: string;
  country: string;
  latitude: number;
  longitude: number;
  altitude: number;
  url: string;
  noOfRaces: number;
  fastestLap: string;
}

export interface DriverSummary {
  driverId: number;
  firstName: string;
  lastName: string;
  number: number;
  nationality: string;
  dob: string;
  url: string;
}

/**
 * Below is from the json data files
 */
export interface Circuit {
  circuitId: number;
  circuitRef: string;
  name: string;
  location: string;
  country: string;
  lat: number;
  lng: number;
  alt: number;
  url: string;
}

export interface Race {
  raceId: number;
  year?: number;
  round?: number;
  circuitId: number;
  name?: string;
  date?: string;
  time?: string;
  url?: string;
  fp1_date?: string;
  fp1_time?: string;
  fp2_date?: string;
  fp2_time?: string;
  fp3_date?: string;
  fp3_time?: string;
  quali_date?: string;
  quali_time?: string;
  sprint_date?: string;
  sprint_time?: string;
}

export interface Lap {
  raceId: number;
  driverId: number;
  lap: number;
  position: number;
  time: string;
  milliseconds: number;
}

export interface Driver {
  driverId: number;
  driverRef: string;
  number: string;
  code: string;
  forename: string;
  surname: string;
  dob: string;
  nationality: string;
  url: string;
}

export interface Standing {
  driverStandingsId: number;
  raceId: number;
  driverId: number;
  points: number;
  position: number;
  positionText: number;
  wins: number;
}
