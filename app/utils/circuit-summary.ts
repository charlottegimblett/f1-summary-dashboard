import { Circuit, Race, Lap, CircuitSummary } from "@/types";
import { loadData } from "./data-processing";

export async function getCircuitSummaryData() {
  const [circuitsData, racesData, lapTimesData] = await Promise.all([
    loadData("public/data/circuits.json"),
    loadData("public/data/races.json"),
    loadData("public/data/lap_times.json"),
  ]);

  const [circuits, racesPerCircuit, fastestLapPerCircuit] = await Promise.all([
    initialiseCircuits(circuitsData),
    getRacesPerCircuit(racesData),
    getFastestLapPerCircuit(racesData, lapTimesData),
  ]);

  return { circuits, racesPerCircuit, fastestLapPerCircuit };
}

export function initialiseCircuits(circuitsData: Circuit[]): CircuitSummary[] {
  return circuitsData.map((circuit) => ({
    circuitId: circuit.circuitId,
    name: circuit.name,
    country: circuit.country,
    location: circuit.location,
    altitude: circuit.alt,
    latitude: circuit.lat,
    longitude: circuit.lng,
    url: circuit.url,
    noOfRaces: 0,
    fastestLap: "",
  }));
}

export function getRacesPerCircuit(racesData: Race[]) {
  const raceCounts = new Map<number, number>();

  racesData.forEach((race) => {
    const count = raceCounts.get(race.circuitId) || 0;
    raceCounts.set(race.circuitId, count + 1);
  });

  return raceCounts;
}

export function getFastestLapPerCircuit(
  racesData: Race[],
  lapTimesData: Lap[]
) {
  const raceIdToCircuitId = new Map<number, number>();
  racesData.forEach((race) =>
    raceIdToCircuitId.set(race.raceId, race.circuitId)
  );

  const fastestLapPerCircuit = new Map<number, string>();

  lapTimesData.forEach((lap) => {
    const circuitId = raceIdToCircuitId.get(lap.raceId);
    if (circuitId) {
      const fastestLap = fastestLapPerCircuit.get(circuitId);
      if (
        !fastestLap ||
        parseTimeString(lap.time) < parseTimeString(fastestLap)
      ) {
        fastestLapPerCircuit.set(circuitId, lap.time);
      }
    }
  });

  return fastestLapPerCircuit;
}

export function parseTimeString(timeStr: string): number {
  const [minutes, seconds] = timeStr.split(":");
  if (seconds) {
    const [sec, ms] = seconds.split(".");
    if (sec && ms) {
      const parsedTime =
        parseInt(minutes) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(ms);
      if (parsedTime) return parsedTime;
    }
  }
  return -1;
}
