import { Circuit, Race, Lap, CircuitSummary } from "@/types";
import { loadData } from "./data-processing";

export async function getCircuitSummaryData(): Promise<CircuitSummary[]> {
  console.log("...redoing the getCircuitSummaryData func");

  const [circuitsData, racesData, lapTimesData] = await Promise.all([
    loadData("public/data/circuits.json"),
    loadData("public/data/races.json"),
    loadData("public/data/lap_times.json"),
  ]);

  const circuits = initialiseCircuits(circuitsData);
  const raceIdToCircuitId = mapRaceIdToCircuitId(racesData, circuits);

  const circuitLapTimes = collectLapTimesByCircuit(
    lapTimesData,
    raceIdToCircuitId
  );

  const updatedCircuits = updateFastestLaps(circuits, circuitLapTimes);
  return updatedCircuits;
}

export function initialiseCircuits(
  circuitsData: Circuit[]
): Map<number, CircuitSummary> {
  const circuitsSummary: Map<number, CircuitSummary> = new Map();
  circuitsData.forEach((circuit) => {
    circuitsSummary.set(circuit.circuitId, {
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
    });
  });
  return circuitsSummary;
}

export function mapRaceIdToCircuitId(
  racesData: Race[],
  circuits: Map<number, CircuitSummary>
): Record<number, number> {
  const raceIdToCircuitId: Record<number, number> = {};
  racesData.forEach((race) => {
    raceIdToCircuitId[race.raceId] = race.circuitId;
    const circuitObject = circuits.get(race.circuitId);
    if (circuitObject) {
      circuitObject.noOfRaces += 1;
    }
  });
  return raceIdToCircuitId;
}

export function collectLapTimesByCircuit(
  lapTimesData: Lap[],
  raceIdToCircuitId: Record<number, number>
): Record<number, string[]> {
  const circuitLapTimes: Record<number, string[]> = {};
  lapTimesData.forEach((lap) => {
    const circuitId = raceIdToCircuitId[lap.raceId];
    if (circuitId) {
      if (!circuitLapTimes[circuitId]) {
        circuitLapTimes[circuitId] = [];
      }
      circuitLapTimes[circuitId].push(lap.time);
    }
  });
  return circuitLapTimes;
}

export function updateFastestLaps(
  circuits: Map<number, CircuitSummary>,
  circuitLapTimes: Record<number, string[]>
): CircuitSummary[] {
  const updatedCircuits = new Map(circuits);

  for (const [circuitIdStr, lapTimes] of Object.entries(circuitLapTimes)) {
    const circuitId = Number(circuitIdStr);
    const circuitObject = updatedCircuits.get(circuitId);

    if (circuitObject) {
      const fastestLap = lapTimes.reduce(getFastestLap, "");
      circuitObject.fastestLap = fastestLap;
    }
  }

  return [...updatedCircuits.values()];
}

export function getFastestLap(currentFastest: string, lap: string): string {
  return currentFastest === "" ||
    parseTimeString(currentFastest) > parseTimeString(lap)
    ? lap
    : currentFastest;
}

export function parseTimeString(timeStr: string): number {
  const [minutes, seconds] = timeStr.split(":");
  const [sec, ms] = seconds.split(".");
  return parseInt(minutes) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(ms);
}
