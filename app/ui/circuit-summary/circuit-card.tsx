import Link from "next/link";
import Card from "../card";
import { CircuitSummary } from "@/types";

function Rounded(num: number): number {
  return Math.round(num * 100) / 100;
}

export default function CircuitCard({ circuit }: { circuit: CircuitSummary }) {
  const {
    name,
    noOfRaces,
    fastestLap,
    latitude,
    longitude,
    altitude,
    location,
    url,
  } = circuit;
  return (
    <Link href={url} target="_blank">
      <Card>
        <div className="grid grid-cols-circuit grid-rows-1 gap-4">
          <span className="font-bold text-primary-blue">{name}</span>
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
    </Link>
  );
}
