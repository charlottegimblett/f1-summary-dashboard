import Link from "next/link";
import Card from "../card";
import { CircuitSummary } from "@/app/circuit-summary/page";

export default function CircuitCard({ circuit }: { circuit: CircuitSummary }) {
  const { name, noRaces, fastestLap, lat, lng, alt, location } = circuit;
  return (
    <Link
      href="http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit"
      target="_blank"
    >
      <Card>
        <div className="grid grid-cols-circuit grid-rows-1 gap-4">
          <span className="font-bold text-primary-blue">{name}</span>
          <span className="text-sm">
            <b>No of races: </b>
            {noRaces}
          </span>
          <span className="text-sm">
            <b>Fastest lap: </b>
            {fastestLap}
          </span>
          <span className="text-sm">
            <b>Latitude: </b>
            {lat}
          </span>
          <span className="text-sm">
            <b>Longitude: </b>
            {lng}
          </span>
          <span className="text-sm">
            <b>Altitude: </b>
            {alt}
          </span>
        </div>
        <span className="text-sm">{location}</span>
      </Card>
    </Link>
  );
}
