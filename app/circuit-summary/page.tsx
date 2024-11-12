import { williamsBold } from "../fonts/fonts";
import CircuitCard from "../ui/circuit-summary/circuit-card";
import { getCircuitSummaryData } from "../utils/circuit-summary";

export default async function Page() {
  const { circuits, racesPerCircuit, fastestLapPerCircuit } =
    await getCircuitSummaryData();

  return (
    <div className="flex flex-col gap-4 w-3/4 max-xl:w-[90%] my-0 mx-[auto] pb-4">
      <div
        className={`${williamsBold.className} text-3xl text-primary-blue mt-8`}
      >
        Circuit Summary
      </div>
      {circuits.map((circuit) => (
        <CircuitCard
          key={circuit.circuitId}
          circuit={circuit}
          noOfRaces={racesPerCircuit.get(circuit.circuitId) || 0}
          fastestLap={fastestLapPerCircuit.get(circuit.circuitId) || ""}
        />
      ))}
    </div>
  );
}
