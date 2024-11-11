import { williamsBold } from "../fonts/fonts";
import CircuitCard from "../ui/circuit-summary/circuit-card";
import Search from "../ui/search";
import fs from "fs";
import path from "path";

interface RaceSummary {
  raceId: number;
  circuitId: number;
  lapTimes: string[];
}

export interface CircuitSummary {
  circuitId: number;
  name: string;
  location: string;
  country: string;
  lat: number;
  lng: number;
  alt: number;
  url: string;
  noRaces: number;
  fastestLap: string;
}

interface FastestLap {
  circuitId: number;
  times: string[];
}

interface Circuit {
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

interface Race {
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

interface LapTime {
  raceId: number;
  driverId: number;
  lap: number;
  position: number;
  time: string;
  milliseconds: number;
}

async function getCircuitSummaryData() {
  const circuitsFilePath = path.join(
    process.cwd(),
    "public",
    "data/circuits.json"
  );
  const racesFilePath = path.join(process.cwd(), "public", "data/races.json");
  const lapTimesFilePath = path.join(
    process.cwd(),
    "public",
    "data/lap_times.json"
  );

  const circuitsRawData = fs.readFileSync(circuitsFilePath, "utf8");
  const racesRawData = fs.readFileSync(racesFilePath, "utf8");
  const lapTimesRawData = fs.readFileSync(lapTimesFilePath, "utf8");

  const circuitsJson: Circuit[] = JSON.parse(circuitsRawData);
  const racesJson: Race[] = JSON.parse(racesRawData);
  const lapTimesJson: LapTime[] = JSON.parse(lapTimesRawData);

  // add the circuit data to a circuits array
  const circuits: CircuitSummary[] = [];
  circuitsJson.forEach((circuit) => {
    circuits[circuit.circuitId] = {
      circuitId: circuit.circuitId,
      name: circuit.name,
      location: circuit.location,
      country: circuit.country,
      lat: circuit.lat,
      lng: circuit.lng,
      alt: circuit.alt,
      url: circuit.url,
      noRaces: 0,
      fastestLap: "",
    };
  });

  const races: RaceSummary[] = [];
  racesJson.forEach((race) => {
    // increment the no of races for the corresponding circuit
    circuits[race.circuitId] = {
      ...circuits[race.circuitId],
      noRaces: (circuits[race.circuitId].noRaces += 1),
    };

    // add each race to the races array
    races[race.raceId] = {
      raceId: race.raceId,
      circuitId: race.circuitId,
      lapTimes: [],
    };
  });

  // add each lap time to its corresponding race
  lapTimesJson.forEach((lapTime) => {
    races[lapTime.raceId] = {
      ...races[lapTime.raceId],
      lapTimes: [...races[lapTime.raceId].lapTimes, lapTime.time],
    };
  });

  // map all lap times to a circuit
  const fastestLapArray: FastestLap[] = [];
  races.forEach((race) => {
    fastestLapArray[race.circuitId] = {
      circuitId: race.circuitId,
      times: fastestLapArray[race.circuitId]
        ? [...fastestLapArray[race.circuitId].times, ...race.lapTimes]
        : [...race.lapTimes],
    };
  });

  // calculate the fastest time and add to the circuits array
  fastestLapArray.forEach((circuit) => {
    const fastestLap = circuit.times.reduce((fastest, current) => {
      return current < fastest ? current : fastest;
    }, circuit.times[0]);
    circuits[circuit.circuitId].fastestLap = fastestLap;
  });

  return circuits;
}

export default async function Page() {
  const circuits = await getCircuitSummaryData();

  return (
    <div className="flex flex-col gap-4 w-3/4 max-xl:w-[90%] my-0 mx-[auto]">
      <div
        className={`${williamsBold.className} text-3xl text-primary-blue mt-8`}
      >
        Circuit Summary
      </div>
      <Search placeholder="Enter a circuit name" />
      {circuits.map((circuit) => (
        <CircuitCard key={circuit.circuitId} circuit={circuit} />
      ))}
    </div>
  );
}
