export interface RaceSummary {
  raceId: number;
  circuitId: number;
  lapTimes: string[];
}

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

export interface FastestLap {
  circuitId: number;
  times: string[];
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

export interface LapTime {
  raceId: number;
  driverId: number;
  lap: number;
  position: number;
  time: string;
  milliseconds: number;
}
