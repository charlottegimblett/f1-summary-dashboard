import Link from "next/link";
import Card from "../card";
import { CircuitSummary } from "@/types";

function Rounded(num: number): number {
  return Math.round(num * 100) / 100;
}

export default function CircuitCard({
  circuit,
  noOfRaces,
  fastestLap,
}: {
  circuit: CircuitSummary;
  noOfRaces: number;
  fastestLap: string;
}) {
  const { name, latitude, longitude, altitude, location, url } = circuit;
  return (
    <Card>
      <div className="grid grid-cols-circuit grid-rows-1 gap-4">
        <Link href={url} target="_blank">
          <span className="font-bold text-primary-blue">{name}</span>
        </Link>
        <span className="text-sm">
          <b>No of races: </b>
          {noOfRaces}
        </span>
        <span className="text-sm">
          <b>Fastest lap: </b>
          {fastestLap || "-"}
        </span>
        <span className="text-sm">
          <b>Latitude: </b>
          {Rounded(latitude)}
        </span>
        <span className="text-sm">
          <b>Longitude: </b>
          {Rounded(longitude)}
        </span>
        <span className="text-sm">
          <b>Altitude: </b>
          {altitude}
        </span>
      </div>
      <span className="text-sm">{location}</span>
    </Card>
  );
}
